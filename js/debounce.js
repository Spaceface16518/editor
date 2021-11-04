export function debounce (f, delay) {
  let timer = undefined;

  return () => {
    const context = this, args = arguments;
    clearTimeout(timer);
    timer = setTimeout(() => {
      f.apply(context, args);
    }, delay);
  };
}
