export const cls = (...classNames: Array<string | undefined | false>) => {
  return classNames.filter((className) => !!className).join(' ');
};
