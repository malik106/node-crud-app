const { DEFAULT_LIMIT, DEFAULT_PAGE } = require('../constants/common');
const itemService = require('../services/item');

const defaultErrorType = 'INTERNAL_SERVER_ERROR';

const defaultErrorMsg = 'Something went wrong. Please try again later';

const getItems = async (req, res) => {
  try {
    const { metadata, filter } = req.body;

    metadata.limit = metadata.limit || DEFAULT_LIMIT;
    metadata.page = metadata.page || DEFAULT_PAGE;

    const items = await itemService.getItems(metadata, filter);

    if (items) {
      return res.status(200).json({
        items,
        metadata: {
          page: metadata.page,
          totalItems: items.length,
        },
      });
    }
    return res.status(404).json({
      error_type: 'ITEM_NOT_FOUND',
      message: 'Item not found',
    });
  } catch (error) {
    return res.status(error.statusCode || 500).json({
      error_type: error.errorType || defaultErrorType,
      error_message: error.errorMessage || defaultErrorMsg,
    });
  }
};

const createItem = async (req, res) => {
  try {
    const { title } = req.body;

    const newItem = await itemService.createItem(title);

    if (newItem) {
      return res.status(200).json({
        newItem,
      });
    }
    return res.status(400).json({
      error_type: 'ITEM_NOT_CREATED',
      message: 'Item not created',
    });
  } catch (error) {
    return res.status(error.statusCode || 500).json({
      error_type: error.errorType || defaultErrorType,
      error_message: error.errorMessage || defaultErrorMsg,
    });
  }
};

const getItemById = async (req, res) => {
  try {
    const { id } = req.params;

    const item = await itemService.getItemById(parseInt(id, 10));

    if (item) {
      return res.status(200).json({
        item,
      });
    }
    return res.status(404).json({
      error_type: 'ITEM_NOT_FOUND',
      message: 'Item not found',
    });
  } catch (error) {
    return res.status(error.statusCode || 500).json({
      error_type: error.errorType || defaultErrorType,
      error_message: error.errorMessage || defaultErrorMsg,
    });
  }
};

const updateItemById = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedItemData = req.body;
    const updatedItem = await itemService.updateItemById(
      parseInt(id, 10),
      updatedItemData
    );

    if (updatedItem) {
      return res.status(200).json({
        updatedItem,
      });
    }
    return res.status(400).json({
      error_type: 'ITEM_NOT_UPDATED',
      message: 'Item could not be updated.',
    });
  } catch (error) {
    return res.status(error.statusCode || 500).json({
      error_type: error.errorType || defaultErrorType,
      error_message: error.errorMessage || defaultErrorMsg,
    });
  }
};

const deleteItemById = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedItem = await itemService.deleteItemById(parseInt(id, 10));

    if (deletedItem) {
      return res.status(200).json({
        message: deletedItem,
      });
    }
    return res.status(400).json({
      error_type: 'ITEM_NOT_DELETED',
      message: 'Item could not be deleted',
    });
  } catch (error) {
    return res.status(error.statusCode || 500).json({
      error_type: error.errorType || defaultErrorType,
      error_message: error.errorMessage || defaultErrorMsg,
    });
  }
};

module.exports = {
  getItems,
  createItem,
  getItemById,
  updateItemById,
  deleteItemById,
};
