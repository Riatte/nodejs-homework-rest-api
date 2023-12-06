const express = require("express");
const { validateBody, isValidId, authenticate } = require("../../middlewares");
const {
  validateRequestBody,
  validateRequestBodyFav,
} = require("../../helpers");
const { schemas } = require("../../models/contact");
const router = express.Router();
const ctrl = require("../../controllers/contacts/index");
router.use(authenticate);
router.get("/", ctrl.getAll);
router.get("/:contactId", isValidId, ctrl.getById);

router.post("/", validateBody(schemas.addSchema), ctrl.add);

router.delete("/:contactId", isValidId, ctrl.deleteById);

router.put(
  "/:contactId",
  isValidId,
  validateRequestBody,
  validateBody(schemas.addSchema),
  ctrl.updateById
);

router.patch(
  "/:contactId/favorite",
  isValidId,
  validateRequestBodyFav,
  validateBody(schemas.updateFavoriteSchema),
  ctrl.updateStatusContact
);

module.exports = router;
