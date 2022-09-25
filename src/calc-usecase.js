module.exports.calcUsecaseExecute = (x, y) => {
  if (x && y) {
    return x + y;
  }

  throw new Error('invalid values');
};
