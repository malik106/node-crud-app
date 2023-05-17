const itemFileHandling = require('../file-handling/item');

const getItems = (metadata, filter) => itemFileHandling.getItems(metadata, filter);

const createItem = (newItemData) => itemFileHandling.createItem(newItemData);

const getItemById = (itemId) => itemFileHandling.getItemById(itemId);

const updateItemById = (itemId, updatedItemData) => itemFileHandling.updateItemById(itemId, updatedItemData);

const deleteItemById = (itemId) => itemFileHandling.deleteItemById(itemId);

module.exports = {
  getItems,
  createItem,
  getItemById,
  updateItemById,
  deleteItemById,
};
