import prismaClient from "../../prisma";

class ListCategoryService {
    async execute() {

        //findMany trazer tudo que encontrar dentro do módulo category
        const category = await prismaClient.category.findMany({
            //Define o que vai ser exibido
            select: {
                id: true,
                name: true
            }
        })

        return category;
    }
}

export { ListCategoryService }