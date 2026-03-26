import { RedirectService } from "../services/RedirectService";
import { Request, Response } from "express";


const service = new RedirectService();

    export class RedirectController {
        async redirecionar(req: Request, res: Response) {
            try {
                const code = req.params.code as string;
                const url = await service.redirecionar(code);
                return res.redirect(url)
            } catch (error: unknown) {
            return res.status(400).json({ error: error instanceof Error ? error.message : String(error) });
            }
        }
    }
