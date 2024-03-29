export const debounce = (callback: (...args: any) => void, delay: number) => {
  let timer;
  return (...args: any) => {
    clearTimeout(timer!);
    timer = setTimeout(() => callback(...args), delay);
  };
};