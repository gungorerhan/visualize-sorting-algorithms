import React from "react";
import "./TopBar.css";

const algorithms = [
    {
        id: "mergeSort",
        label: "Merge Sort",
        value: "mergeSort",
    },
    {
        id: "bubbleSort",
        label: "Bubble Sort",
        value: "bubbleSort",
    },
    {
        id: "quickSort",
        label: "Quick Sort",
        value: "quickSort",
    },
    {
        id: "heapSort",
        label: "Heap Sort",
        value: "heapSort",
    },
];

// todo: disable all items while sorting, replace sort button with stop
const TopBar = ({
    min,
    setMin,
    max,
    setMax,
    length,
    setLength,
    setReset,
    algorithm,
    setAlgorithm,
    sorting,
    setSorting,
}) => {
    return (
        <>
            <div className="buttons-container">
                <div className="input-with-label">
                    <label htmlFor="lengthInput">Length:</label>
                    <input
                        className="input-field"
                        id={"lengthInput"}
                        value={length}
                        onChange={(e) => setLength(e.target.value)}
                    />
                </div>

                <div className="input-with-label">
                    <label htmlFor="minInput">Min:</label>
                    <input
                        className="input-field"
                        id={"minInput"}
                        value={min}
                        onChange={(e) => setMin(e.target.value)}
                    />
                </div>

                <div className="input-with-label">
                    <label htmlFor="maxInput">Max:</label>
                    <input
                        className="input-field"
                        id={"maxInput"}
                        value={max}
                        onChange={(e) => setMax(e.target.value)}
                    />
                </div>

                <button onClick={() => setReset(true)}>Generate</button>

                <div className="divider" />

                <div className="input-with-label">
                    <label htmlFor="algorithmInput">Algorithm:</label>
                    <select id={"algorithmInput"} value={algorithm} onChange={(e) => setAlgorithm(e.target.value)}>
                        {algorithms.map((alg) => (
                            <option key={alg.value} value={alg.value}>
                                {alg.label}
                            </option>
                        ))}
                    </select>
                </div>

                <button onClick={() => setSorting(!sorting)}>Sort</button>
            </div>
        </>
    );
};

export default TopBar;
