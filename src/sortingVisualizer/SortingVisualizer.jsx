import React, { useCallback, useEffect, useState } from "react";
import { getBubbleSortAnimations, getMergeSortAnimations } from "./sortingAlgorithms";
import "./SortingVisualizer.css";

const PRIMARY_COLOR = "lightblue";
const SECONDAY_COLOR = "red";
const SPEED = 5;

// push intervals and clear while component unmount or stop click
const intervalIds = [];

const SortingVisualizer = ({ length, min, max, reset, setReset, sorting, setSorting, algorithm }) => {
    const [array, setArray] = useState([]);

    const generateRandomArray = useCallback(
        (length, min, max) => {
            const randomArray = Array.from({ length: length }, () => Math.floor(Math.random() * (max - min + 1) + min));
            setArray(randomArray);
            setReset(false);
        },
        [setReset]
    );

    const mergeSort = useCallback(() => {
        const animations = getMergeSortAnimations(array.slice());
        for (let i = 0; i < animations.length; i++) {
            const arrayBars = document.getElementsByClassName("bar");
            const isColorChange = i % 3 !== 2;
            if (isColorChange) {
                const [barOneIdx, barTwoIdx] = animations[i];
                const barOneStyle = arrayBars[barOneIdx].style;
                const barTwoStyle = arrayBars[barTwoIdx].style;
                const color = i % 3 === 0 ? SECONDAY_COLOR : PRIMARY_COLOR;
                setTimeout(() => {
                    barOneStyle.backgroundColor = color;
                    barTwoStyle.backgroundColor = color;
                }, i * SPEED);
            } else {
                setTimeout(() => {
                    const [barOneIdx, newHeight] = animations[i];
                    const barOneStyle = arrayBars[barOneIdx].style;
                    barOneStyle.height = `${newHeight}px`;
                }, i * SPEED);
            }
        }
    }, [array]);

    const bubbleSort = useCallback(() => {
        const animations = getBubbleSortAnimations(array.slice());
        let j = 0;
        for (let i = 0; i < animations.length; i++) {
            const arrayBars = document.getElementsByClassName("bar");
            const isColorChange = animations[i].length < 3;
            if (isColorChange) {
                const [barOneIdx, barTwoIdx] = animations[i];
                const barOneStyle = arrayBars[barOneIdx].style;
                const barTwoStyle = arrayBars[barTwoIdx].style;
                const color = j % 2 === 0 ? SECONDAY_COLOR : PRIMARY_COLOR;
                j++;
                setTimeout(() => {
                    barOneStyle.backgroundColor = color;
                    barTwoStyle.backgroundColor = color;
                }, i * SPEED);
            } else {
                setTimeout(() => {
                    const [barOneIdx, newbarOneHeight, barTwoIdx, newbarTwoHeight] = animations[i];
                    const barOneStyle = arrayBars[barOneIdx].style;
                    barOneStyle.height = `${newbarOneHeight}px`;

                    const barTwoStyle = arrayBars[barTwoIdx].style;
                    barTwoStyle.height = `${newbarTwoHeight}px`;
                }, i * SPEED);
            }
        }
    }, [array]);

    const quickSort = useCallback(() => {}, []);
    const heapSort = useCallback(() => {}, []);

    useEffect(() => {
        reset && generateRandomArray(length, min, max);
    }, [generateRandomArray, length, max, min, reset]);

    useEffect(() => {
        if (sorting) {
            if (algorithm === "bubbleSort") {
                bubbleSort();
            } else if (algorithm === "mergeSort") {
                mergeSort();
            } else if (algorithm === "quickSort") {
                quickSort();
            } else {
                heapSort();
            }
            setSorting(false);
        }
    }, [algorithm, array, bubbleSort, heapSort, mergeSort, quickSort, setSorting, sorting]);

    return (
        <>
            <div className="container">
                {array.map((value, idx) => (
                    <div className="bar" key={idx} style={{ height: `${value}px` }}></div>
                ))}
            </div>
        </>
    );
};

export default SortingVisualizer;
