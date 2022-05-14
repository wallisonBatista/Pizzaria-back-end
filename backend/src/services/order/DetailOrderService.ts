import prismaClient from "../../prisma";

interface DetailRequest {
    order_id: string;
}

class DetailOderService {
    async execute({ order_id }: DetailRequest) {
        //encontrar todos itens que pertence a esse pedido (ordem)
        const orders = await prismaClient.item.findMany({
            where: {
                order_id: order_id
            },
            include: {
                Product: true,
                Order: true
            }
        })

        return orders;

    }
}

export { DetailOderService }