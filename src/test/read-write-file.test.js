const fs = require('fs/promises');
const { describe, expect, it } = require('@jest/globals');
const {
  readDataFromFile,
  writeDataToFile,
} = require('../utils/read-write-file');

// Mocking the fs module functions
jest.mock('fs/promises', () => ({
  readFile: jest.fn(),
  writeFile: jest.fn(),
}));

describe('File Handling Functions', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('readDataFromFile', () => {
    it('should read data from file and parse JSON', async () => {
      const jsonData = `{
        "lastItemId": 26,
        "item": [
          {
            "id": 11,
            "title": "Item 1"
          },
          {
            "id": 12,
            "title": "Item 2"
          }
        ]
      }`;

      fs.readFile.mockResolvedValue(jsonData);

      const expectedData = {
        lastItemId: 26,
        item: [
          {
            id: 11,
            title: 'Item 1',
          },
          {
            id: 12,
            title: 'Item 2',
          },
        ],
      };

      const result = await readDataFromFile();

      expect(fs.readFile).toHaveBeenCalledWith('items.json', 'utf8');
      expect(result).toEqual(expectedData);
    });
  });

  describe('writeDataToFile', () => {
    it('should write data to file as JSON', async () => {
      const data = {
        lastItemId: 26,
        item: [
          {
            id: 11,
            title: 'Item 1',
          },
          {
            id: 12,
            title: 'Item 2',
          },
        ],
      };
      const jsonData = JSON.stringify(data, null, 2);

      fs.writeFile.mockResolvedValue();

      await writeDataToFile(data);

      expect(fs.writeFile).toHaveBeenCalledWith('items.json', jsonData, 'utf8');
    });
  });
});
