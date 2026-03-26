import { LinkRepository } from "../repositories/LinkRepository";

export class RedirectService {
    private repository = new LinkRepository()

    async redirecionar(code: string) {
        const link = await this.repository.buscarPorCode(code);
        if (!link) throw new Error("link não encontrado");
        return link.url
    }
}