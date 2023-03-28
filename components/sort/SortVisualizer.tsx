const SortVisualizer = ({ number }: { number: number }) => {
  return (
    <div
      className="rotatex0 flex w-8 items-end justify-center bg-slate-400"
      style={{ height: `${number * 4 + 20}px` }}
    >
      {number}
    </div>
  );
};

export default SortVisualizer;
