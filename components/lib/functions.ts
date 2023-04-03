export const creatRandomArray = (size: number) => {
  const array: number[] = [];
  let number = Math.floor(Math.random() * 50);

  while (array.length != size) {
    if (!array.includes(number)) array.push(number);
    number = Math.floor(Math.random() * 50);
  }
  return array;
};

export const toggleClass = (id: number, className: string) => {
  document.getElementById(String(id))?.classList.toggle(className);
};
export const addClass = (id: number, className: string) => {
  document.getElementById(String(id))?.classList.add(className);
};
export const removeClass = (id: number, className: string) => {
  document.getElementById(String(id))?.classList.remove(className);
};
