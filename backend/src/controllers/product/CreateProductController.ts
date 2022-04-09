import { Request, Response } from 'express';
import { CreateProductService } from '../../services/product/CreateProductService';

class CreateProductController {
    async handle(req: Request, res: Response) {
        //Pega os valores da requisição
        const { name, price, description, category_id } = req.body;

        //inicializa o serviço
        const createProductService = new CreateProductService();

        if (!req.file) {
            throw new Error("Erro no envio da foto")
        } else {

            const { originalname, filename: banner } = req.file;

            //criando o produto
            const product = await createProductService.execute({
                name,
                price,
                description,
                banner,
                category_id
            });

            //exibindo o retorno do serviço
            return res.json(product)
        }
    }
}

export { CreateProductController }