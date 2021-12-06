import { useState } from "react";
import "./App.css";
import SortingVisualizer from "./sortingVisualizer/SortingVisualizer";
import TopBar from "./topBar/TopBar";

const App = () => {
    const [min, setMin] = useState(10);
    const [max, setMax] = useState(1000);
    const [length, setLength] = useState(100);
    const [reset, setReset] = useState(true);
    const [algorithm, setAlgorithm] = useState("mergeSort");
    const [sorting, setSorting] = useState(false);

    return (
        <div className="App">
            <TopBar
                min={min}
                setMin={setMin}
                max={max}
                setMax={setMax}
                length={length}
                setLength={setLength}
                setReset={setReset}
                algorithm={algorithm}
                setAlgorithm={setAlgorithm}
                sorting={sorting}
                setSorting={setSorting}
            />
            <SortingVisualizer
                min={min}
                max={max}
                length={length}
                reset={reset}
                setReset={setReset}
                algorithm={algorithm}
                sorting={sorting}
                setSorting={setSorting}
            />
        </div>
    );
};

export default App;
