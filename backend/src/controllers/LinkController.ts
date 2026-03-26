import { Request, Response } from "express";
import { LinkService } from "../services/LinkService";

const service  = new LinkService();

export class LinkController {
    async criar(req: Request, res: Response) {
        try {
            const { url, code } = req.body;
            if(!url) return res.status(400).json({ error: "URL é obrigatória" });

            const link = await service.criar(url, code)
            return res.status(200).json(link)
        } catch (error: unknown) {
            return res.status(400).json({ error: error instanceof Error ? error.message : String(error) });
        }
    }
}