const { describe, expect, it } = require('@jest/globals');
const itemController = require('../controllers/item');
const itemService = require('../services/item');

describe('Controller', () => {
  describe('getItems', () => {
    it('should return 200 and items when valid request is made', async () => {
      const req = {
        body: {
          metadata: {
            limit: 10,
            page: 1,
          },
          filter: 'test',
          sort: 'asc',
        },
      };
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };
      const mockItems = [{ id: 1, title: 'test item' }];
      jest.spyOn(itemService, 'getItems').mockResolvedValue(mockItems);

      await itemController.getItems(req, res);

      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith({
        metadata: { page: 1, totalItems: mockItems.length },
        items: mockItems,
      });
    });

    it('should return items not found error when no items exist', async () => {
      const req = {
        body: {
          metadata: {
            limit: 10,
            page: 1,
          },
          filter: 'test',
          sort: 'asc',
        },
      };

      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };
      const expectedResponse = {
        error_type: 'ITEM_NOT_FOUND',
        message: 'Item not found',
      };

      jest.spyOn(itemService, 'getItems').mockResolvedValue(null);
      await itemController.getItems(req, res);

      expect(res.status).toHaveBeenCalledWith(404);
      expect(res.json).toHaveBeenCalledWith(expectedResponse);
    });

    it('should return error response when getItems throws an error', async () => {
      const req = {
        body: {
          metadata: {
            limit: 10,
            page: 1,
            sort: 'asc',
          },
          filter: 'test',
        },
      };
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };
      const mockError = new Error('test error');
      jest.spyOn(itemService, 'getItems').mockRejectedValue(mockError);

      await itemController.getItems(req, res);

      expect(res.status).toHaveBeenCalledWith(500);
      expect(res.json).toHaveBeenCalledWith({
        error_type: 'INTERNAL_SERVER_ERROR',
        error_message: 'Something went wrong. Please try again later',
      });
    });
  });

  describe('createItem', () => {
    it('should return 200 and createItem', async () => {
      const req = {
        body: {
          title: 'for testing',
        },
      };
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };
      const mockItems = [{ id: 19, title: 'for testing' }];
      jest.spyOn(itemService, 'createItem').mockResolvedValue(mockItems);

      await itemController.createItem(req, res);

      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith({
        newItem: mockItems,
      });
    });

    it('should return Item not created error when no items created', async () => {
      const req = {
        body: {
          title: 'for testing',
        },
      };
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };

      const expectedResponse = {
        error_type: 'ITEM_NOT_CREATED',
        message: 'Item not created',
      };

      jest.spyOn(itemService, 'createItem').mockResolvedValue(null);
      await itemController.createItem(req, res);

      expect(res.status).toHaveBeenCalledWith(400);
      expect(res.json).toHaveBeenCalledWith(expectedResponse);
    });

    it('should return error response when createItem throws an error', async () => {
      const req = {
        body: {
          title: 'for testing',
        },
      };
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };
      const mockError = new Error('test error');
      jest.spyOn(itemService, 'createItem').mockRejectedValue(mockError);

      await itemController.createItem(req, res);

      expect(res.status).toHaveBeenCalledWith(500);
      expect(res.json).toHaveBeenCalledWith({
        error_type: 'INTERNAL_SERVER_ERROR',
        error_message: 'Something went wrong. Please try again later',
      });
    });
  });

  describe('getItemById', () => {
    it('should return 200 and getItemById', async () => {
      const req = {
        params: {
          id: 1,
        },
      };
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };
      const mockItems = [{ id: 1, title: 'for testing' }];
      jest.spyOn(itemService, 'getItemById').mockResolvedValue(mockItems);

      await itemController.getItemById(req, res);

      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith({
        item: mockItems,
      });
    });

    it('should return item not found error when no items found', async () => {
      const req = {
        params: {
          id: 1,
        },
      };
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };

      const expectedResponse = {
        error_type: 'ITEM_NOT_FOUND',
        message: 'Item not found',
      };

      jest.spyOn(itemService, 'getItemById').mockResolvedValue(null);
      await itemController.getItemById(req, res);

      expect(res.status).toHaveBeenCalledWith(404);
      expect(res.json).toHaveBeenCalledWith(expectedResponse);
    });

    it('should return error response when getItemById throws an error', async () => {
      const req = {
        params: {
          id: 10,
        },
      };
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };
      const mockError = new Error('test error');
      jest.spyOn(itemService, 'getItemById').mockRejectedValue(mockError);

      await itemController.getItemById(req, res);

      expect(res.status).toHaveBeenCalledWith(500);
      expect(res.json).toHaveBeenCalledWith({
        error_type: 'INTERNAL_SERVER_ERROR',
        error_message: 'Something went wrong. Please try again later',
      });
    });
  });

  describe('updateItemById', () => {
    it('should return 200 and updateItemById', async () => {
      const req = {
        body: {
          title: 'test item',
        },
        params: {
          id: 1,
        },
      };
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };
      const mockItems = [{ id: 1, title: 'test item' }];
      jest.spyOn(itemService, 'updateItemById').mockResolvedValue(mockItems);

      await itemController.updateItemById(req, res);

      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith({
        updatedItem: mockItems,
      });
    });

    it('should return Item could not be updated error when no items updated', async () => {
      const req = {
        params: {
          id: 1,
        },
      };
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };

      const expectedResponse = {
        error_type: 'ITEM_NOT_UPDATED',
        message: 'Item could not be updated.',
      };

      jest.spyOn(itemService, 'updateItemById').mockResolvedValue(null);
      await itemController.updateItemById(req, res);

      expect(res.status).toHaveBeenCalledWith(400);
      expect(res.json).toHaveBeenCalledWith(expectedResponse);
    });

    it('should return error response when updateItemById throws an error', async () => {
      const req = {
        body: {
          title: '',
        },
        params: {
          id: 1,
        },
      };
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };
      const mockError = new Error('test error');
      jest.spyOn(itemService, 'updateItemById').mockRejectedValue(mockError);

      await itemController.updateItemById(req, res);

      expect(res.status).toHaveBeenCalledWith(500);
      expect(res.json).toHaveBeenCalledWith({
        error_type: 'INTERNAL_SERVER_ERROR',
        error_message: 'Something went wrong. Please try again later',
      });
    });
  });

  describe('deleteItemById', () => {
    it('should return 200 and deleteItemById', async () => {
      const req = {
        params: {
          id: 1,
        },
      };
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };
      const mockItems = 'Item is deleted';
      jest.spyOn(itemService, 'deleteItemById').mockResolvedValue(mockItems);

      await itemController.deleteItemById(req, res);

      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith({
        message: mockItems,
      });
    });

    it('should return Item could not be deleted error when no items deleted', async () => {
      const req = {
        params: {
          id: 1,
        },
      };
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };

      const expectedResponse = {
        error_type: 'ITEM_NOT_DELETED',
        message: 'Item could not be deleted',
      };

      jest.spyOn(itemService, 'deleteItemById').mockResolvedValue(null);
      await itemController.deleteItemById(req, res);

      expect(res.status).toHaveBeenCalledWith(400);
      expect(res.json).toHaveBeenCalledWith(expectedResponse);
    });

    it('should return error response when deleteItemById throws an error', async () => {
      const req = {
        params: {
          id: 1,
        },
      };
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };
      const mockError = new Error('test error');
      jest.spyOn(itemService, 'deleteItemById').mockRejectedValue(mockError);

      await itemController.deleteItemById(req, res);

      expect(res.status).toHaveBeenCalledWith(500);
      expect(res.json).toHaveBeenCalledWith({
        error_type: 'INTERNAL_SERVER_ERROR',
        error_message: 'Something went wrong. Please try again later',
      });
    });
  });
});
