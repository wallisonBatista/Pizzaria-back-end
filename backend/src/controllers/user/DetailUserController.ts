import { Request, Response } from 'express';
import { DetailUserService } from '../../services/user/DetailUserService';

class DetailUserController {
    async handle(req: Request, res: Response) {

        const user_id = req.user_id;

        const detailUserService = new DetailUserService();

        //chamando o serviço e passando await para esperar o serviço
        const user = await detailUserService.execute(user_id);

        return res.json(user);
    }
}

export { DetailUserController }