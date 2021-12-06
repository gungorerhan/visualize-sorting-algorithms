import React, { useCallback, useEffect, useState } from "react";
import "./SortingVisualizer.css";

// TODO: move to algorithms file
function merge(arr) {
    if (arr.length <= 1) return arr;
    let mid = Math.floor(arr.length / 2);
    let left = merge(arr.slice(0, mid));
    let right = merge(arr.slice(mid));
    function mergeSort(arr1, arr2) {
        let result = [];
        let i = 0;
        let j = 0;
        while (i < arr1.length && j < arr2.length) {
            if (arr1[i] < arr2[j]) {
                result.push(arr1[i]);
                i++;
            } else {
                result.push(arr2[j]);
                j++;
            }
        }
        while (i < arr1.length) {
            result.push(arr1[i]);
            i++;
        }
        while (j < arr2.length) {
            result.push(arr2[j]);
            j++;
        }
        return result;
    }
    return mergeSort(left, right);
}

const SortingVisualizer = ({ length, min, max, reset, setReset, sorting, setSorting }) => {
    const [array, setArray] = useState([]);

    const generateRandomArray = useCallback(
        (length, min, max) => {
            const randomArray = Array.from({ length: length }, () => Math.floor(Math.random() * (max - min + 1) + min));
            setArray(randomArray);
            setReset(false);
        },
        [setReset]
    );

    useEffect(() => {
        reset && generateRandomArray(length, min, max);
    }, [generateRandomArray, length, max, min, reset]);

    useEffect(() => {
        if (sorting) {
            const newArray = merge(array, 0, array.length - 1);
            setSorting(false);
            setArray(newArray);
        }
    }, [array, setSorting, sorting]);

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
