import { prisma } from "../libs/prisma";


export class LinkRepository {
    async criar(url: string, code: string) {
        return prisma.link.create({
            data: { url, code }
        })
    }

    async buscarPorCode(code: string) {
        return prisma.link.findUnique({
            where: { code: code }
        })
    }
}