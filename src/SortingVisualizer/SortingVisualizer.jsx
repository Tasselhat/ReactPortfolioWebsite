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

const arraySizeMediaQ1 = window.matchMedia(
  "(min-width: 551px) and (max-width: 1000px)"
);
const arraySizeMediaQ2 = window.matchMedia(
  "(min-width: 1001px) and (max-width: 1600px)"
);
const arraySizeMediaQ3 = window.matchMedia(
  "(min-width: 1601px) and (max-width: 2559px)"
);
const arraySizeMediaQ4 = window.matchMedia(
  "(min-width: 2560px) and (max-width: 2959px)"
);
const arraySizeMediaQ5 = window.matchMedia("(min-width: 2960px)");
let SPEED = 1;
let SLOW_ALG_ANIMATION_SPEED_MS = 0.01 * SPEED;
let FAST_ALG_ANIMATION_SPEED_MS = 1 * SPEED;
let ARRAY_SIZE = 100;
if (arraySizeMediaQ1.matches) {
  ARRAY_SIZE = 150;
} else if (arraySizeMediaQ2.matches) {
  ARRAY_SIZE = 250;
} else if (arraySizeMediaQ3.matches) {
  ARRAY_SIZE = 350;
} else if (arraySizeMediaQ4.matches) {
  ARRAY_SIZE = 550;
} else if (arraySizeMediaQ5.matches) {
  ARRAY_SIZE = 800;
}
const DEFAULT_COLOR = "royalblue";
const SECONDARY_COLOR = "red";

export default class SortingVisualizer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      array: [],
    };
  }

  componentDidMount() {
    this.resetArray();
    document.getElementById("changeSpeed").value = 1;
    changeSpeedFunction();
  }

  resetArray() {
    const array = [];
    let i = 0;
    while (i <= ARRAY_SIZE) {
      array.push(randomIntFromInterval(6, 800));
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
    while (i <= ARRAY_SIZE) {
      array.push(x);
      i++;
      if (arraySizeMediaQ1.matches) {
        x += 5;
      } else if (arraySizeMediaQ2.matches) {
        x += 4;
      } else if (arraySizeMediaQ3.matches) {
        x += 2;
      } else if (arraySizeMediaQ4.matches) {
        x += 2;
      } else if (arraySizeMediaQ5.matches) {
        x += 2;
      } else {
        x += 6;
      }
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
    let startBarHeight = 800;
    while (i <= ARRAY_SIZE) {
      array.push(startBarHeight);
      i++;
      if (arraySizeMediaQ1.matches) {
        startBarHeight -= 5;
      } else if (arraySizeMediaQ2.matches) {
        startBarHeight -= 3;
      } else if (arraySizeMediaQ3.matches) {
        startBarHeight -= 2;
      } else if (arraySizeMediaQ4.matches) {
        startBarHeight -= 1;
      } else if (arraySizeMediaQ5.matches) {
        startBarHeight -= 1;
      } else {
        startBarHeight -= 8;
      }
    }

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
          if (animations[i].length === 3 && animations[i - 1].length === 2) {
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
  }

  gnomeSort() {
    const animations = getGnomeSort(this.state.array);
    changeSpeedFunction();
    animateSort(animations, SLOW_ALG_ANIMATION_SPEED_MS);
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
  }

  insertionSort() {
    const animations = getInsertionSort(this.state.array);
    changeSpeedFunction();
    animateSort(animations, SLOW_ALG_ANIMATION_SPEED_MS);
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
  }

  bubbleSort() {
    const animations = getBubbleSort(this.state.array);
    changeSpeedFunction();
    animateSort(animations, SLOW_ALG_ANIMATION_SPEED_MS);
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
  }

  mergeSort() {
    const animations = getMergeSort(this.state.array);
    changeSpeedFunction();
    animateSort(animations, FAST_ALG_ANIMATION_SPEED_MS);
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
  }

  quickSort() {
    const animations = getQuickSort(this.state.array);
    changeSpeedFunction();
    animateSort(animations, FAST_ALG_ANIMATION_SPEED_MS);
  }

  render() {
    const { array } = this.state;

    return (
      <div>
        <Header />
        <div className="container">
          <div className="array_container">
            {array.map((value, idx) => (
              <div
                className="array_bar"
                key={idx}
                style={{ height: `${value}px` }}
              ></div>
            ))}
            <div className="infoPanel" id="infoPanel">
              <div>
                <h3 className="infoPanelHeader" id="infoPanelHeader"></h3>
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
            <button className="sortButton" onClick={() => this.resetArray()}>
              Generate Random Array
            </button>
            <button className="sortButton" onClick={() => this.linearArray()}>
              Generate Random Linear Array
            </button>
            <button className="sortButton" onClick={() => this.reversedArray()}>
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
            <button className="sortButton" onClick={() => this.callGnomeSort()}>
              Gnome Sort
            </button>
            <button
              className="sortButton"
              onClick={() => this.callSelectionSort()}
            >
              Selection Sort
            </button>
            <button className="sortButton" onClick={() => this.callMergeSort()}>
              Merge Sort
            </button>
            <button className="sortButton" onClick={() => this.callQuickSort()}>
              Quick Sort
            </button>
          </div>
        </div>
        <div className="footer-background-overlay"></div>
        <Footer />
      </div>
    );
  }
}

function animateSort(animations, speed) {
  for (let i = 0; i < animations.length; i++) {
    const arrayBars = document.getElementsByClassName("array_bar");
    const isColorChange = animations[i].length === 2;
    if (isColorChange) {
      let color = SECONDARY_COLOR;
      if (i >= 1) {
        if (animations[i].length === 2 && animations[i - 1].length === 2) {
          color = DEFAULT_COLOR;
        }
      }
      const [barOneIndx, barTwoIndx] = animations[i];
      if (barTwoIndx > ARRAY_SIZE) {
        //This is for bubble sort, returns an animation barTwoIndx value outside the array index due to comparing i to i+1 in it's iterations.
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
