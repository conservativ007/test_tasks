export const setClearClassToAnswers = () => {
  let elems = Array.from(
    document.querySelectorAll('.answer')
  ) as HTMLDivElement[];

  elems.map((elem: HTMLDivElement) => {
    elem.className = 'answer blue';
  });
};
