import '@testing-library/jest-dom';
import compareArr from './index';

describe('compareArr', () => {
  it('compareArr_1', () => {
    expect(compareArr([1, 2, 3], [1, 4, 5, 6, 23])).toEqual([1, 1, 2, 3, 4, 5, 6, 23]);
  });
});
