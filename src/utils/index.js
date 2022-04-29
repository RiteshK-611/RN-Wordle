export const copyArray = (arr) => {
  return [...arr.map((rows) => [...rows])];
};

export const getDayOfTheYear = () => {
  const now = new Date();
  const start = new Date(now.getFullYear(), 0, 0);
  const diff = now - start;
  const oneDay = 1000 * 60 * 60 * 24;
  const day = Math.floor(diff / oneDay);
  // console.log("Day of year: " + day);
  return day+1;
  // https://stackoverflow.com/questions/8619879/javascript-calculate-the-day-of-the-year-1-366
};

export const getDayKey = () => {
  const d = new Date();
  let year = d.getFullYear();
  return `day-${getDayOfTheYear()}-${year}`;
};
