const validate = (string) => {
  const length = string.length || 0;
  if (typeof string !== 'string' || !length || length > 10) throw new Error('Invalid input');
};

const stringLength = (string) => {
  validate(string);

  return string.length;
};

const reverseString = (string) => {
  validate(string);

  return string.split('')
    .reverse()
    .join('');
};

const capitalizeString = (string) => string.toUpperCase();

export { stringLength, reverseString, capitalizeString };