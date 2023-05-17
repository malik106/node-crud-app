const { describe, expect, it } = require('@jest/globals');
const itemFileHandling = require('../file-handling/item');
const itemServices = require('../services/item');

describe('Services', () => {
  describe('getItems', () => {
    it('should return paginated and filtered items when valid arguments are provided', () => {
      const mockData = [{ id: 1, title: 'test item 1' }];
      jest.spyOn(itemFileHandling, 'getItems').mockReturnValue(mockData);

      const result = itemServices.getItems(1, 1, 'test', 'asc');

      expect(result).toEqual([{ id: 1, title: 'test item 1' }]);
    });
  });

  describe('createItem', () => {
    it('should return paginated and filtered items when valid arguments are provided', () => {
      const mockData = [{ id: 1, title: 'for testing' }];
      jest.spyOn(itemFileHandling, 'createItem').mockReturnValue(mockData);

      const result = itemServices.createItem('for testing');

      expect(result).toEqual([{ id: 1, title: 'for testing' }]);
    });
  });
});
