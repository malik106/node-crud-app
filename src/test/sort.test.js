const { describe, expect, it } = require('@jest/globals');
const { sortData } = require('../utils/sort');

describe('Sort Data', () => {
  it('sort data in ascending order based on title', () => {
    const data = [
      { id: 1, title: 'C' },
      { id: 2, title: 'B' },
      { id: 3, title: 'A' },
    ];
    const sortedData = sortData(data, 'asc');

    expect(sortedData).toEqual([
      { id: 3, title: 'A' },
      { id: 2, title: 'B' },
      { id: 1, title: 'C' },
    ]);
  });

  it('sort data in descending order based on title', () => {
    const data = [
      { id: 1, title: 'C' },
      { id: 2, title: 'B' },
      { id: 3, title: 'A' },
    ];
    const sortedData = sortData(data, 'desc');

    expect(sortedData).toEqual([
      { id: 1, title: 'C' },
      { id: 2, title: 'B' },
      { id: 3, title: 'A' },
    ]);
  });
});
