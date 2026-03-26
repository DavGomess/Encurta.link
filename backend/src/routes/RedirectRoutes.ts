import { Router } from "express";
import { RedirectController } from "../controllers/RedirectController";

const router = Router();
const redirectController = new RedirectController();

router.get("/:code", redirectController.redirecionar.bind(redirectController));

export default router;