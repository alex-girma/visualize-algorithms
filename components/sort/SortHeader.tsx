import { creatRandomArray } from '../lib/functions';

interface SortHeaderProps {
  algo: string;
  size: number;
  setAlgo: React.Dispatch<React.SetStateAction<string>>;
  setSize: React.Dispatch<React.SetStateAction<number>>;
  setDataArray: React.Dispatch<React.SetStateAction<number[]>>;
}

const SortHeader = ({
  algo,
  setAlgo,
  size,
  setSize,
  setDataArray,
}: SortHeaderProps) => {
  const handleRandomData = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setDataArray(creatRandomArray(size));
  };

  return (
    <div className="flex gap-10">
      <select value={algo} onChange={(e) => setAlgo(e.target.value)}>
        <option value="Bubble">Bubble Sort</option>
        <option value="Selection">Selection Sort</option>
        <option value="Insertion">Insertion Sort</option>
      </select>
      <select value={size} onChange={(e) => setSize(Number(e.target.value))}>
        <option value="10">Small</option>
        <option value="15">Medium</option>
        <option value="20">Big</option>
      </select>
      <button onClick={handleRandomData}>randomize data</button>
      <button>Visualize {algo} Sort</button>
    </div>
  );
};

export default SortHeader;
