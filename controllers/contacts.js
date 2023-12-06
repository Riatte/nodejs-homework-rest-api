const { ctrlWrapper } = require("../helpers");

const {
  addContact,
  getAll,
  getById,
  deleteById,
  updateById,
  updateStatusContact,
} = require("./contacts");
module.exports = {
  getAll: ctrlWrapper(getAll),
  getById: ctrlWrapper(getById),
  add: ctrlWrapper(addContact),
  deleteById: ctrlWrapper(deleteById),
  updateById: ctrlWrapper(updateById),
  updateStatusContact: ctrlWrapper(updateStatusContact),
};
