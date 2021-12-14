import { Router } from "express";
import ListController from "../controllers/list.controller";
import ListValidator from "../validations/list/list.validator";
import validateToken from "../middlewares/auth.middleware";

const router = Router();

router.post(
  "/",
  validateToken,
  ListValidator.validateAddList(),
  ListValidator.myValidationResult,
  ListController.addList
);

router.get(
  "/", 
  ListController.getLists
);

router.patch(
  "/:listId",
  validateToken,
  ListValidator.validateListUpdate(),
  ListValidator.myValidationResult,
  ListController.updateList
);

router.delete(
  "/:listId",
  // validateToken,
  ListController.deleteComment
);

export default router;
