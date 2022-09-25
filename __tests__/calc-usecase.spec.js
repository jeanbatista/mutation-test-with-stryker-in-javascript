const { calcUsecaseExecute } = require('../src/calc-usecase');

describe('calc-usecase suit tests', () => {
  it('should be return the sum of two values', () => {
    const result = calcUsecaseExecute(1, 2);

    expect(result).toBe(3);
  });

  it('should be return exception error', () => {
    expect(() => calcUsecaseExecute()).toThrow('invalid values');
  });

  it('should be return exception error when one value be null or undefined', () => {
    expect(() => calcUsecaseExecute(1)).toThrow('invalid values');
  });
});
