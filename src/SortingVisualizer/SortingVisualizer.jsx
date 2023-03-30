import React from "react";

import { getBubbleSort } from "../SortingAlgorithms/BubbleSort.js";
import { getGnomeSort } from "../SortingAlgorithms/GnomeSort.js";
import { getInsertionSort } from "../SortingAlgorithms/InsertionSort.js";
import { getMergeSort } from "../SortingAlgorithms/MergeSort.js";
import { getQuickSort } from "../SortingAlgorithms/QuickSort.js";
import { getSelectionSort } from "../SortingAlgorithms/SelectionSort";

import Header from "../Components/Header.js";
import Footer from "../Components/Footer.js";

import "./SortingVisualizer.css";
import "../General.css";
import "../index.css";

let SPEED = 1;
let SLOW_ALG_ANIMATION_SPEED_MS = 0.01 * SPEED;
let FAST_ALG_ANIMATION_SPEED_MS = 1 * SPEED;
const DEFAULT_COLOR = "cornflowerblue";
const SECONDARY_COLOR = "red";

export default class SortingVisualizer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            array: [],
            arraySize: (window.innerWidth * 0.94) / 5,
            infoPanelOpen: false,
        };
    }

    componentDidMount() {
        this.resetArray();
        document.getElementById("changeSpeed").value = 1;
        changeSpeedFunction();
    }

    componentDidUpdate() {
        if (this.state.arraySize !== (window.innerWidth * 0.94) / 5)
            this.setState({
                arraySize: (window.innerWidth * 0.94) / 5,
            });
    }

    resetArray() {
        const array = [];
        let i = 0;
        while (i <= this.state.arraySize) {
            array.push(randomIntFromInterval(6, 600));
            i++;
        }

        this.setState({ array });
        changeSpeedFunction();
        this.clearInfoPanel();
        this.forceUpdate();
    }

    linearArray() {
        const array = [];
        let i = 0;
        let x = 5;
        while (i <= this.state.arraySize) {
            array.push(x);
            i++;
            x += 2;
        }
        shuffle(array);

        this.setState({ array });
        changeSpeedFunction();
        this.clearInfoPanel();
        this.forceUpdate();
    }

    reversedArray() {
        const array = [];
        let i = 0;
        let x = 5;
        while (i <= this.state.arraySize) {
            array.push(x);
            i++;
            x += 2;
        }
        array.reverse();

        this.setState({ array });
        changeSpeedFunction();
        this.clearInfoPanel();
        this.forceUpdate();
    }

    clearInfoPanel() {
        const header = document.getElementById("infoPanelHeader");
        const paragraph = document.getElementById("infoPanelParagraph");
        const container = document.getElementById("infoPanel");
        header.innerHTML = "";
        paragraph.innerHTML = "";
        container.style.background = "transparent";
        container.style.color = "transparent";
    }

    callSelectionSort() {
        this.changeInfoPanelSelectionSort();
        this.selectionSort();
    }

    changeInfoPanelSelectionSort() {
        const header = document.getElementById("infoPanelHeader");
        const paragraph = document.getElementById("infoPanelParagraph");
        const container = document.getElementById("infoPanel");
        header.innerHTML = "Selection Sort";
        paragraph.innerHTML =
            "Selection sort works by comparing every value in the unsorted array, finding the minimum of all unsorted elements and placing it at the end of the sorted array.\nSelection sort has an average runtime of O(n<sup>2</sup>) and a best case runtime of O(n<sup>2</sup>), it performs slightly better than bubble and gnome sort.";
        container.style.background =
            "linear-gradient(rgba(24, 43, 73, 1),rgba(24, 43, 73, 0.6))";
        container.style.color = "white";
    }

    selectionSort() {
        const animations = getSelectionSort(this.state.array);
        SPEED = document.getElementById("changeSpeed").value;
        // Selection sort was having issues with animating comparisons so it gets it's own function for determining which animation to use
        for (let i = 0; i < animations.length; i++) {
            const arrayBars = document.getElementsByClassName("array_bar");
            const isColorChange = animations[i].length < 4;
            if (isColorChange) {
                let color = SECONDARY_COLOR;
                if (i >= 1) {
                    if (
                        animations[i].length === 3 &&
                        animations[i - 1].length === 2
                    ) {
                        color = DEFAULT_COLOR;
                    }
                }
                const [bar1Indx, barTwoIndx] = animations[i];
                const barOneStyle = arrayBars[bar1Indx].style;
                const barTwoStyle = arrayBars[barTwoIndx].style;
                setTimeout(() => {
                    barOneStyle.backgroundColor = color;
                    barTwoStyle.backgroundColor = color;
                }, i * SLOW_ALG_ANIMATION_SPEED_MS);
            } else if (animations[i].length === 4) {
                const [bar1Indx, newHeight] = animations[i];
                if (bar1Indx === -1) {
                    continue;
                }
                setTimeout(() => {
                    const barStyle = arrayBars[bar1Indx].style;
                    barStyle.height = `${newHeight}px`;
                }, i * SLOW_ALG_ANIMATION_SPEED_MS);
            }
        }
    }

    callGnomeSort() {
        this.changeInfoPanelGnomeSort();
        this.gnomeSort();
    }

    changeInfoPanelGnomeSort() {
        const header = document.getElementById("infoPanelHeader");
        const paragraph = document.getElementById("infoPanelParagraph");
        const container = document.getElementById("infoPanel");
        header.innerHTML = "Gnome Sort";
        paragraph.innerHTML =
            "A garden gnome walks along the line of numbers one at a time, looking at the one in front of him and the one to the right of him, and swapping them if they are not in order and moving to the left, if the numbers are in order, or there is nothing in front of him, he moves to the right once. He does this until he reaches the end of the line and he has verified each number is in it's correct place. \nGnome sort has an average runtime of O(n<sup>2</sup>), he performs better on partially sorted arrays, but his method is generally pretty bad.";
        container.style.background =
            "linear-gradient(rgba(24, 43, 73, 1),rgba(24, 43, 73, 0.6))";
        container.style.color = "white";
    }

    gnomeSort() {
        const animations = getGnomeSort(this.state.array);
        changeSpeedFunction();
        animateSort(
            animations,
            SLOW_ALG_ANIMATION_SPEED_MS,
            this.state.arraySize
        );
    }

    callInsertionSort() {
        this.changeInfoPanelInsertionSort();
        this.insertionSort();
    }

    changeInfoPanelInsertionSort() {
        const header = document.getElementById("infoPanelHeader");
        const paragraph = document.getElementById("infoPanelParagraph");
        const container = document.getElementById("infoPanel");
        header.innerHTML = "Insertion Sort";
        paragraph.innerHTML =
            "Insertion sort works by building a sorted array one number at a time, comparing the next unsorted element to each previous sorted element until it finds no numbers smaller and inserting the number into the sorted array.\nInsertion sort has an average runtime of O(n<sup>2</sup>) but is fast for checking if an array is already sorted, and fast if sample size is small, it is the best of the quadratic sorting algorithms in most cases.";
        container.style.background =
            "linear-gradient(rgba(24, 43, 73, 1),rgba(24, 43, 73, 0.6))";
        container.style.color = "white";
    }

    insertionSort() {
        const animations = getInsertionSort(this.state.array);
        changeSpeedFunction();
        animateSort(
            animations,
            SLOW_ALG_ANIMATION_SPEED_MS,
            this.state.arraySize
        );
    }

    callBubbleSort() {
        this.changeInfoPanelBubbleSort();
        this.bubbleSort();
    }

    changeInfoPanelBubbleSort() {
        const header = document.getElementById("infoPanelHeader");
        const paragraph = document.getElementById("infoPanelParagraph");
        const container = document.getElementById("infoPanel");
        header.innerHTML = "Bubble Sort";
        paragraph.innerHTML =
            'Bubble sort works by comparing every element in the array to the one next to it and swapping larger elements to the right, repeating this process until it cannot swap any elements and the array is sorted, this causes large elements to "Bubble" to the top of the array. \n Bubble sort has an average runtime of O(n<sup>2</sup>) and a best case runtime of O(n) making it decent for verifying an already sorted array.';
        container.style.background =
            "linear-gradient(rgba(24, 43, 73, 1),rgba(24, 43, 73, 0.6))";
        container.style.color = "white";
    }

    bubbleSort() {
        const animations = getBubbleSort(this.state.array);
        changeSpeedFunction();
        animateSort(
            animations,
            SLOW_ALG_ANIMATION_SPEED_MS,
            this.state.arraySize
        );
    }

    callMergeSort() {
        this.changeInfoPanelMergeSort();
        this.mergeSort();
    }

    changeInfoPanelMergeSort() {
        const header = document.getElementById("infoPanelHeader");
        const paragraph = document.getElementById("infoPanelParagraph");
        const container = document.getElementById("infoPanel");
        header.innerHTML = "Merge Sort";
        paragraph.innerHTML =
            "Merge sort works by dividing the array into smaller and smaller arrays until they are 1 element large, then comparing and combining the arrays while sorting them in the process, until they are combined into one fully sorted array.\nMerge sort has an average and worst case runtime of O(n log n), making it a fast and versatile algorithm, a wonderful example of the divide and conquer paradigm.";
        container.style.background =
            "linear-gradient(rgba(24, 43, 73, 1),rgba(24, 43, 73, 0.6))";
        container.style.color = "white";
    }

    mergeSort() {
        const animations = getMergeSort(this.state.array);
        changeSpeedFunction();
        animateSort(
            animations,
            FAST_ALG_ANIMATION_SPEED_MS,
            this.state.arraySize
        );
    }

    callQuickSort() {
        this.changeInfoPanelQuickSort();
        this.quickSort();
    }

    changeInfoPanelQuickSort() {
        const header = document.getElementById("infoPanelHeader");
        const paragraph = document.getElementById("infoPanelParagraph");
        const container = document.getElementById("infoPanel");
        header.innerHTML = "Quick Sort";
        paragraph.innerHTML =
            "Quick Sort works by selecting a number as a pivot (the rightmost value in this case) partitioning the array, and pushing every value larger than this pivot to the right, then repeating this process again and again until the partitions are small enough to be trivially sorted. \nQuick sort has an average runtime of O(n log n) and a worst case runtime of O(n<sup>2</sup>) such as when the selected pivot is the largest or smallest element in the array (as seen with a reversed array in this case).";
        container.style.background =
            "linear-gradient(rgba(24, 43, 73, 1),rgba(24, 43, 73, 0.6))";
        container.style.color = "white";
    }

    quickSort() {
        const animations = getQuickSort(this.state.array);
        changeSpeedFunction();
        animateSort(
            animations,
            FAST_ALG_ANIMATION_SPEED_MS,
            this.state.arraySize
        );
    }

    showInfoPanel = () => {
        this.setState({ infoPanelOpen: !this.state.infoPanelOpen });
    };

    render() {
        const { array } = this.state;

        return (
            <div>
                <Header />
                <div className="sortingContainer">
                    <div className="array_container" id="array_container">
                        {array.map((value, idx) => (
                            <div
                                className="array_bar"
                                key={idx}
                                style={{ height: `${value}px` }}
                            ></div>
                        ))}
                        <div className="infoPanel" id="infoPanel">
                            <p
                                className="infoPanelButton"
                                onClick={() => this.showInfoPanel()}
                            >
                                {" "}
                                {this.state.infoPanelOpen
                                    ? "Close Info Panel"
                                    : "Open info Panel"}
                            </p>
                            <div
                                className={
                                    this.state.infoPanelOpen
                                        ? "infoPanelContent active"
                                        : "infoPanelContent"
                                }
                            >
                                <h3
                                    className="infoPanelHeader"
                                    id="infoPanelHeader"
                                ></h3>
                                <p id="infoPanelParagraph"></p>
                            </div>
                        </div>
                    </div>
                    <div className="control_container">
                        <div className="speedSliderContainer">
                            <p className="speedSliderTitle">Speed</p>
                            &lt; Faster
                            <input
                                id="changeSpeed"
                                className="speedSlider"
                                type="range"
                                min="1"
                                max="10"
                                onChange={this.handleChange}
                            />
                            Slower &gt;
                        </div>
                        <div>
                            <button
                                className="sortButton"
                                onClick={() => this.resetArray()}
                            >
                                Generate Random Array
                            </button>
                            <button
                                className="sortButton"
                                onClick={() => this.linearArray()}
                            >
                                Generate Random Linear Array
                            </button>
                            <button
                                className="sortButton"
                                onClick={() => this.reversedArray()}
                            >
                                Generate Reversed Array
                            </button>
                            <button
                                className="sortButton"
                                onClick={() => this.callBubbleSort()}
                            >
                                Bubble sort
                            </button>
                            <button
                                className="sortButton"
                                onClick={() => this.callInsertionSort()}
                            >
                                Insertion Sort
                            </button>
                            <button
                                className="sortButton"
                                onClick={() => this.callGnomeSort()}
                            >
                                Gnome Sort
                            </button>
                            <button
                                className="sortButton"
                                onClick={() => this.callSelectionSort()}
                            >
                                Selection Sort
                            </button>
                            <button
                                className="sortButton"
                                onClick={() => this.callMergeSort()}
                            >
                                Merge Sort
                            </button>
                            <button
                                className="sortButton"
                                onClick={() => this.callQuickSort()}
                            >
                                Quick Sort (Right Pointer)
                            </button>
                        </div>
                    </div>
                </div>
                <div className="footer-background-overlay light"></div>
                <Footer />
            </div>
        );
    }
}

function animateSort(animations, speed, arraySize) {
    for (let i = 0; i < animations.length; i++) {
        const arrayBars = document.getElementsByClassName("array_bar");
        const isColorChange = animations[i].length === 2;
        if (isColorChange) {
            let color = SECONDARY_COLOR;
            if (i >= 1) {
                if (
                    animations[i].length === 2 &&
                    animations[i - 1].length === 2
                ) {
                    color = DEFAULT_COLOR;
                }
            }
            const [barOneIndx, barTwoIndx] = animations[i];
            if (barTwoIndx > arraySize) {
                //This is for bubble sort, returns an animation for barTwoIndx outside the array index size due to comparing i to i+1 in it's iterations.
                continue;
            }
            const barOneStyle = arrayBars[barOneIndx].style;
            const barTwoStyle = arrayBars[barTwoIndx].style;
            setTimeout(() => {
                barOneStyle.backgroundColor = color;
                barTwoStyle.backgroundColor = color;
            }, i * speed);
        } else if (animations[i].length === 3) {
            const [barOneIndx, newHeight] = animations[i];
            if (barOneIndx === -1) {
                continue;
            }
            setTimeout(() => {
                const barStyle = arrayBars[barOneIndx].style;
                barStyle.height = `${newHeight}px`;
            }, i * speed);
        }
    }
}

function changeSpeedFunction() {
    SPEED = document.getElementById("changeSpeed").value;
    SLOW_ALG_ANIMATION_SPEED_MS = 0.05 * SPEED;
    FAST_ALG_ANIMATION_SPEED_MS = 1 * SPEED;
}

function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function shuffle(array) {
    let currentIndex = array.length,
        randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex !== 0) {
        // Pick a remaining element.
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex],
            array[currentIndex],
        ];
    }

    return array;
}
