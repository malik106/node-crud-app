const itemService = require('../services/item');

const defaultErrorType = 'INTERNAL_SERVER_ERROR';

const defaultErrorMsg = 'Something went wrong. Please try again later';

const getItems = async (req, res) => {
  try {
    const { metadata, filter } = req.body;

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
      updatedItemData,
    );

    if (updatedItem) {
      return res.status(200).json({
        updatedItem,
      });
    }
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
