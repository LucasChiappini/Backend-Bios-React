import { Router } from "express";
import {
  getUser,
  createUser,
  updateUser,
  deleteUser,
  getUserSearch,
  getUserSearchSpecific,
} from "../../controllers/user.controller";
import { createUserMiddleware } from "../../middlewares/user.middlewares";
const router = Router();

router.get("/userSpecific/:username", getUserSearchSpecific);
router.get("/users/:username", getUserSearch);
router.get("/users", getUser);
router.post("/users", createUserMiddleware, createUser);
router.put("/users/:id", updateUser);
router.delete("/users/:id", deleteUser);
export default router;
