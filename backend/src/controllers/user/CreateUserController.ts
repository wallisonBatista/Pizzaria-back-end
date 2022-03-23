import { Request, response, Response } from 'express'
import { CreateUserService } from '../../services/user/CreateUserService'

class CreateUserController {
    async handle(req: Request, res: Response) {
        const { name, email, password } = req.body;

        //inicializando o Service
        const createUserService = new CreateUserService();

        //chamando o método do service
        const user = await createUserService.execute({
            name,
            email,
            password
        });

        return res.json(user)
    }
}

export { CreateUserController }