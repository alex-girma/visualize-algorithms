export const creatRandomArray = (size: number) => {
  const array: number[] = [];
  let number = Math.floor(Math.random() * 50);

  while (array.length != size) {
    if (!array.includes(number)) array.push(number);
    number = Math.floor(Math.random() * 50);
  }
  return array;
};
