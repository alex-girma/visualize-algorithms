import { useEffect } from 'react';
import {
  addClass,
  creatRandomArray,
  removeClass,
  toggleClass,
} from '../lib/functions';

interface SortHeaderProps {
  algo: string;
  size: number;
  dataArray: number[];
  setAlgo: React.Dispatch<React.SetStateAction<string>>;
  setSize: React.Dispatch<React.SetStateAction<number>>;
  setDataArray: React.Dispatch<React.SetStateAction<number[]>>;
}

const SortHeader = ({
  algo,
  setAlgo,
  size,
  setSize,
  dataArray,
  setDataArray,
}: SortHeaderProps) => {
  const handleRandomData = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setDataArray(creatRandomArray(size));
  };

  const handleSort = () => {
    switch (algo) {
      case 'Bubble':
        bubbleSort();
        break;
      case 'Selection':
        selectionSort();
        break;
      case 'Insertion':
        insertionSort();
        break;
      default:
        break;
    }
  };

  const bubbleSort = async () => {
    let noSwap;
    for (let i = dataArray.length; i > 0; i--) {
      noSwap = true;
      for (let j = 0; j < i - 1; j++) {
        toggleClass(dataArray[j], 'bg-green-400');
        toggleClass(dataArray[j + 1], 'bg-green-400');
        if (dataArray[j] > dataArray[j + 1]) {
          let right = dataArray[j];
          dataArray[j] = dataArray[j + 1];
          dataArray[j + 1] = right;
          setDataArray([...dataArray]);
          await new Promise((resolve) => setTimeout(resolve, 500));
          noSwap = false;
        } else {
          await new Promise((resolve) => setTimeout(resolve, 500));
        }
        toggleClass(dataArray[j], 'bg-green-400');
        toggleClass(dataArray[j + 1], 'bg-green-400');
      }

      if (noSwap) break;
    }
  };

  const selectionSort = async () => {
    for (var i = 0; i < dataArray.length; i++) {
      let smallest = i;
      addClass(dataArray[smallest], 'bg-red-400');
      await new Promise((resolve) => setTimeout(resolve, 500));
      for (let j = i + 1; j < dataArray.length; j++) {
        addClass(dataArray[j], 'bg-green-400');
        await new Promise((resolve) => setTimeout(resolve, 500));
        if (dataArray[j] < dataArray[smallest]) {
          removeClass(dataArray[smallest], 'bg-red-400');
          smallest = j;
          addClass(dataArray[j], 'bg-red-400');
          await new Promise((resolve) => setTimeout(resolve, 500));
        }
        removeClass(dataArray[j], 'bg-green-400');
      }
      if (i !== smallest) {
        let temp = dataArray[i];
        dataArray[i] = dataArray[smallest];
        dataArray[smallest] = temp;
        setDataArray([...dataArray]);
        await new Promise((resolve) => setTimeout(resolve, 1000));
      }
      removeClass(dataArray[i], 'bg-red-400');
      addClass(dataArray[i], 'bg-yellow-400');
    }
  };

  const insertionSort = async () => {
    for (let i = 1; i < dataArray.length; i++) {
      let currentValue = dataArray[i];
      let j = i - 1;

      while (j >= 0 && dataArray[j] > currentValue) {
        dataArray[j + 1] = dataArray[j];
        setDataArray([...dataArray]);
        j--;
      }

      dataArray[j + 1] = currentValue;
      setDataArray([...dataArray]);
      await new Promise((resolve) => setTimeout(resolve, 500));
    }
  };

  return (
    <div className="flex gap-10 text-gray-900">
      <div>
        <span className="font-medium text-blue-600 underline">
          Select Algorithm:
        </span>
        <select value={algo} onChange={(e) => setAlgo(e.target.value)}>
          <option value="Bubble">Bubble Sort</option>
          <option value="Selection">Selection Sort</option>
          <option value="Insertion">Insertion Sort</option>
        </select>
      </div>
      <div>
        <span className="font-medium text-blue-600 underline">
          Select array size:
        </span>
        <select value={size} onChange={(e) => setSize(Number(e.target.value))}>
          <option value="10">Small</option>
          <option value="15">Big</option>
        </select>
      </div>
      <button
        onClick={handleRandomData}
        className="rounded  bg-blue-400 px-4 py-1 duration-150 hover:bg-blue-500"
      >
        random array
      </button>
      <button
        onClick={handleSort}
        className="rounded  bg-blue-400 px-4 py-1 duration-150 hover:bg-blue-500"
      >
        Visualize {algo} Sort
      </button>
    </div>
  );
};

export default SortHeader;
