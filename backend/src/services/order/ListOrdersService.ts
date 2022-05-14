import prismaClient from "../../prisma";



class ListOrdersService {
    async execute() {
        //exibir os pedidos finalizados (draft e status false)
        const orders = await prismaClient.order.findMany({
            where: {
                draft: false,
                status: false
            },
            //exibir pelos criados mais recentes, exibir em ordem descrescente
            orderBy: {
                created_at: 'desc'
            }
        })

        return orders;

    }
}

export { ListOrdersService }