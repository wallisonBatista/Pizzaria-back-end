import prismaClient from "../../prisma";

interface ProductRequest {
    category_id: string;
}

class ListByCategoryService {
    async execute({ category_id }: ProductRequest) {

        //busca todos os produtos onde o category é igual ao category_id
        const findByCategory = await prismaClient.product.findMany({
            where: {
                category_id: category_id
            }
        })

        return findByCategory;
    }
}

export { ListByCategoryService }