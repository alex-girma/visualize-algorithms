import { useState } from 'react';
import SortHeader from './SortHeader';

const Sort = () => {
  const [algo, setAlgo] = useState('Bubble');
  const [size, setSize] = useState(10);
  const [dataArray, setDataArray] = useState<number[]>([]);
  console.log(dataArray);
  return (
    <>
      <SortHeader
        algo={algo}
        setAlgo={setAlgo}
        size={size}
        setSize={setSize}
        setDataArray={setDataArray}
      />
    </>
  );
};

export default Sort;
