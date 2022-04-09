import { Request, Response } from "express";
import { ListByCategoryService } from "../../services/product/ListByCategoryService";

class ListByCategoryController {
    async handle(req: Request, res: Response) {
        //listando por query params e forçando a tipagem do category como string
        const category_id = req.query.category_id as string;

        //instanciando o servico -> Inicializando
        const listByCategory = new ListByCategoryService();

        //Executando o serviço e passando o category_id como parâmetro que foi imposto no service
        const products = await listByCategory.execute({
            category_id
        });

        return res.json(products);
    }
}

export { ListByCategoryController }