export default function debounce<T extends (...args: any[]) => void>(
  callBack: T,
  delay = 1000
): (...args: Parameters<T>) => void {
  let timeout: number | undefined;
  return (...args: Parameters<T>) => {
    if (timeout) {
      clearTimeout(timeout);
    }
    timeout = setTimeout(() => {
      callBack(...args);
      timeout = undefined;
    }, delay);
  };
}