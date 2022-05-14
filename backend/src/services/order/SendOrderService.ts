import prismaClient from "../../prisma";

//pegar o id do pedido na hora de finalizar o pedido
interface OrderRequest {
    order_id: string;
}

class SendOrderService {
    async execute({ order_id }: OrderRequest) {
        const order = await prismaClient.order.update({
            //atualizar o id que seja igual ao id enviado e alterar 
            //o campo draft (rascunho) de true para false
            where: {
                id: order_id
            },
            data: {
                draft: false
            }
        })

        return order;
    }
}

export { SendOrderService }