const createRandomInteger = (min, max) => {
  const result = Math.random() * (min - max + 1) + max;
  return Math.floor(result);
};

export {createRandomInteger};
