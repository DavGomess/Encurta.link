import { LinkRepository }  from "../repositories/LinkRepository";
import { nanoid } from "nanoid";

export class LinkService {
    private repository = new LinkRepository();

    async criar (url: string, customCode?: string) {
        const code = customCode ?? nanoid(6)

        const jaExiste = await this.repository.buscarPorCode(code)
        if (jaExiste) throw new Error ("Esse código já está em uso")

        const link = await this.repository.criar(url, code)
        const baseUrl = process.env.BASE_URL ?? "http://localhost:4000";

        return {
            originalUrl: link.url,
            shortUrl: `${baseUrl}/${link.code}`,
            code: link.code
        }
    }
}