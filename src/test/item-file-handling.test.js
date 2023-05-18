const { describe, expect, it } = require('@jest/globals');
const itemFileHandling = require('../file-handling/item');

describe('File Handling', () => {
  describe('getItems', () => {
    it('should return paginated getItems', async () => {
      const metadata = {
        limit: 2,
        page: 1,
        sort: 'asc',
      };
      const filter = 'Item';

      const data = [
        { id: 1, title: 'Item 1' },
        { id: 2, title: 'Item 2' },
        { id: 3, title: 'Item 3' },
      ];

      jest.spyOn(itemFileHandling, 'getItems').mockResolvedValue(data);

      const result = await itemFileHandling.getItems(metadata, filter);

      expect(itemFileHandling.getItems).toHaveBeenCalled();
      expect(result).toEqual(data);
    });
  });

  describe('createItem', () => {
    it('should return createItem', async () => {
      const title = 'for testing';

      const data = { id: 29, title: 'for testing' };

      jest.spyOn(itemFileHandling, 'createItem').mockResolvedValue(data);

      const result = await itemFileHandling.createItem(title);

      expect(itemFileHandling.createItem).toHaveBeenCalled();
      expect(result).toEqual(data);
    });
  });

  describe('getItemById', () => {
    it('should return getItemById item', async () => {
      const itemId = 29;

      const data = { id: 29, title: 'for testing' };

      jest.spyOn(itemFileHandling, 'getItemById').mockResolvedValue(data);

      const result = await itemFileHandling.getItemById(itemId);

      expect(itemFileHandling.getItemById).toHaveBeenCalled();
      expect(result).toEqual(data);
    });
    it('should return null', async () => {
      const itemId = 21;

      const message = null;

      jest.spyOn(itemFileHandling, 'deleteItemById').mockResolvedValue(message);

      const result = await itemFileHandling.deleteItemById(itemId);

      expect(itemFileHandling.deleteItemById).toHaveBeenCalled();
      expect(result).toEqual(message);
    });
  });

  describe('updateItemById', () => {
    it('should return updateItemById item', async () => {
      const itemId = 29;
      const updatedItemData = {
        title: 'for testing',
      };
      const data = { id: 29, title: 'for testing' };

      jest.spyOn(itemFileHandling, 'updateItemById').mockResolvedValue(data);

      const result = await itemFileHandling.updateItemById(
        itemId,
        updatedItemData,
      );

      expect(itemFileHandling.updateItemById).toHaveBeenCalled();
      expect(result).toEqual(data);
    });
    it('should return null', async () => {
      const itemId = 21;

      const message = null;

      jest.spyOn(itemFileHandling, 'deleteItemById').mockResolvedValue(message);

      const result = await itemFileHandling.deleteItemById(itemId);

      expect(itemFileHandling.deleteItemById).toHaveBeenCalled();
      expect(result).toEqual(message);
    });
  });

  describe('deleteItemById', () => {
    it('should return Item is deleted', async () => {
      const itemId = 29;

      const message = 'Item is deleted';

      jest.spyOn(itemFileHandling, 'deleteItemById').mockResolvedValue(message);

      const result = await itemFileHandling.deleteItemById(itemId);

      expect(itemFileHandling.deleteItemById).toHaveBeenCalled();
      expect(result).toEqual(message);
    });

    it('should return null', async () => {
      const itemId = 21;

      const message = null;

      jest.spyOn(itemFileHandling, 'deleteItemById').mockResolvedValue(message);

      const result = await itemFileHandling.deleteItemById(itemId);

      expect(itemFileHandling.deleteItemById).toHaveBeenCalled();
      expect(result).toEqual(message);
    });
  });
});
