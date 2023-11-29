const express = require("express");

const schema = require("../../schemas/contacts");

const ctrl = require("../../controllers/contacts");
const router = express.Router();
const { validateRequestBody } = require("../../helpers");

router.get("/", ctrl.getAll);
// router.get("/:contactId", ctrl.getById);
router.post("/", validateBody(schema.addShema), ctrl.add);
// router.delete("/:contactId", ctrl.deleteById);
// router.put(
//   "/:contactId",
//   validateRequestBody,
//   validateBody(schema.addShema),
//   ctrl.updateById
// );

module.exports = router;
