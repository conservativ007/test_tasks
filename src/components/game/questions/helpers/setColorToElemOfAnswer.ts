export const setColorToElemOfAnswer = (
  istrue: boolean,
  event: React.MouseEvent<HTMLElement>
) => {
  let elem = event.target as HTMLDivElement;

  if (istrue === true) {
    elem.className = 'answer green';
  }
  if (istrue === false) {
    elem.className = 'answer red';
  }
};
