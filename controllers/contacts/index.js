const { ctrlWrapper } = require("../../helpers");
const addContact = require("./addContact");
const getAll = require("./getAllContacts");
const getById = require("./getById");
const deleteById = require("./deleteById");
const updateById = require("./updateById");
const updateStatusContact = require("./updateStatusContact");
module.exports = {
  getAll: ctrlWrapper(getAll),
  getById: ctrlWrapper(getById),
  add: ctrlWrapper(addContact),
  deleteById: ctrlWrapper(deleteById),
  updateById: ctrlWrapper(updateById),
  updateStatusContact: ctrlWrapper(updateStatusContact),
};
