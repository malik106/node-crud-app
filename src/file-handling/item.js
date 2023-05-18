const {
  readDataFromFile,
  writeDataToFile,
} = require('../utils/read-write-file');
const { sortData } = require('../utils/sort');

const getItems = async (metadata, filter) => {
  let data = await readDataFromFile();

  const { page, limit, sort } = metadata;
  // Filter Item
  if (filter) {
    data = data.item.filter((item) => item.title.includes(filter));
  }

  // sort
  data = sortData(data.item, sort);

  // Pagination
  const start = (page - 1) * limit;
  const end = start + limit;

  const paginatedItems = data.slice(start, end);

  return paginatedItems;
};

const createItem = async (newItemData) => {
  const data = await readDataFromFile();
  const { lastItemId, item } = data;

  const newItem = {
    id: lastItemId + 1,
    title: newItemData,
  };
  item.push(newItem);
  await writeDataToFile({ lastItemId: lastItemId + 1, item });
  return newItem;
};

const getItemById = async (itemId) => {
  const data = await readDataFromFile();
  const item = data.item.find((item) => item.id === itemId);
  if (item) {
    return item;
  }
  return 'Id not found';
};

const updateItemById = async (itemId, updatedItemData) => {

  const data = await readDataFromFile();

  const itemIndex = data.item.findIndex((item) => item.id === itemId);

  if (itemIndex !== -1) {
    const updatedItem = { id: itemId, ...updatedItemData };
    data.item[itemIndex] = updatedItem;
    await writeDataToFile(data);
    return updatedItem;
  }
  return 'Id not found';
};

const deleteItemById = async (itemId) => {
  const data = await readDataFromFile();

  const itemIndex = data.item.findIndex((item) => item.id === itemId);

  if (itemIndex !== -1) {
    const deletedItem = data.item.splice(itemIndex, 1)[0];
    await writeDataToFile(data);
    if (deletedItem) {
      return 'Item is deleted';
    }
  }
  return 'Id not found';
};

module.exports = {
  getItems,
  createItem,
  getItemById,
  updateItemById,
  deleteItemById,
};
