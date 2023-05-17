const express = require('express');

const router = express.Router();

const itemController = require('../controllers/item');
const dataValidator = require('../validators/item');

// @route GET api/items
// @desc Get all items
// @access Public

router.get('/items', itemController.getItems);

// @route POST api/items
// @desc Create new items
// @access Public

router.post(
  '/items',
  [dataValidator.validateItemData],
  itemController.createItem,
);

// @route GET api/items/:id
// @desc Get an items by ID
// @access Public

router.get('/items/:id', itemController.getItemById);

// @route PUT api/items/:id
// @desc Update an item by ID
// @access Public

router.put(
  '/items/:id',
  [dataValidator.validateItemData],
  itemController.updateItemById,
);

// @route DELETE api/items/:id
// @desc Delete an item by its ID
// @access Public

router.delete('/items/:id', itemController.deleteItemById);

module.exports = router;
