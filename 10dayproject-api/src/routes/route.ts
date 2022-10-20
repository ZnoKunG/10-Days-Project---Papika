import postController from "../controllers/post";
import { Router } from 'express';

const router = Router();
router.get("/academic", postController.Gets);
router.get("/academic/:id", postController.Get);
router.get("/academic", postController.Post);
router.get("/academic/:id", postController.Patch);
router.get("/academic/:id", postController.Delete);

export default router;
