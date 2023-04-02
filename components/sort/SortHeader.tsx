import { creatRandomArray } from '../lib/functions';

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

  const bubbleSort = async () => {
    let noSwap;
    for (let i = dataArray.length; i > 0; i++) {
      noSwap = true;
      for (let j = 0; j < i - 1; j++) {
        document
          .getElementById(`${dataArray[j]}`)
          ?.classList.add('bg-green-400');
        document
          .getElementById(`${dataArray[j + 1]}`)
          ?.classList.add('bg-green-400');
        if (dataArray[j] > dataArray[j + 1]) {
          let right = dataArray[j];
          dataArray[j] = dataArray[j + 1];
          dataArray[j + 1] = right;
          setDataArray([...dataArray]);
          await new Promise((resolve) => setTimeout(resolve, 2000));
          noSwap = false;
        }
        document
          .getElementById(`${dataArray[j]}`)
          ?.classList.remove('bg-green-400');
        document
          .getElementById(`${dataArray[j + 1]}`)
          ?.classList.remove('bg-green-400');
      }
      if (noSwap) break;
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
        onClick={bubbleSort}
        className="rounded  bg-blue-400 px-4 py-1 duration-150 hover:bg-blue-500"
      >
        Visualize {algo} Sort
      </button>
    </div>
  );
};

export default SortHeader;
