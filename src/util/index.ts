export const currency = (num: number | string) => {
  return ('' + num).replace(
    /(\d)(?=(?:\d{3})+(?:\.|$))|(\.\d\d?)\d*$/g,
    (m, s1, s2) => {
      return s2 || (s1 + ',');
    }
  );
}