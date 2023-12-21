import { Router } from "express";
import {
  getRepo,
  createRepo,
  updateRepo,
  deleteRepo,
  getRepoSearch,
} from "../../controllers/repo.controller";
import { createRepoMiddleware } from "../../middlewares/repo.middlewares.ts";

const router = Router();
router.get("/repos/:inputValue/:language/:date", getRepoSearch);
router.get("/repos", getRepo);
router.post("/repos", createRepoMiddleware, createRepo);
router.put("/repos/:id", updateRepo);
router.delete("/repos/:id", deleteRepo);
export default router;
