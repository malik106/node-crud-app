const { describe, expect, it } = require('@jest/globals');
const itemFileHandling = require('../file-handling/item');

describe('File Handling', () => {
  describe('getItems', () => {
    it('should return paginated getItems', async () => {
      const metadata = {
        limit: 10,
        page: 1,
        sort: 'asc',
      };
      const filter = 'delectus';

      const data = [{ id: 1, title: 'delectus' }];

      jest.spyOn(itemFileHandling, 'getItems').mockResolvedValue(data);

      const result = await itemFileHandling.getItems(metadata, filter);

      expect(itemFileHandling.getItems).toHaveBeenCalled();
      expect(result).toEqual(data);
    });
  });

  describe('createItem', () => {
    it('should return new created item', async () => {
      const title = 'for testing';

      const data = { id: 29, title: 'for testing' };

      jest.spyOn(itemFileHandling, 'createItem').mockResolvedValue(data);

      const result = await itemFileHandling.createItem(title);

      expect(itemFileHandling.createItem).toHaveBeenCalled();
      expect(result).toEqual(data);
    });
  });
});
