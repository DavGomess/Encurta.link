import { Router } from "express";
import { LinkController } from "../controllers/LinkController";

const router = Router();
const linkController = new LinkController();

router.post("/", linkController.criar.bind(linkController))

export default router;