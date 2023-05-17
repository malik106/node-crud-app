const fs = require('fs');
const { describe, expect, it } = require('@jest/globals');
const { readDataFromFile } = require('../utils/read-write-file');

describe('readDataFromFile', () => {
  it('should read data from file and return parsed JSON', () => {
    const jsonData = '[{"id":1,"title": "item1"}]';

    // Mocking the fs.readFileSync function
    fs.readFileSync.mockReturnValue(jsonData);

    const result = readDataFromFile();

    expect(fs.readFileSync).toHaveBeenCalledWith('items.json', 'utf8');
    expect(result).toEqual([{ id: 1, title: 'item1' }]);
  });
});
