import prismaClient from '../../prisma';
import { hash } from 'bcryptjs';

interface UserRequest {
    name: string;
    email: string;
    password: string;
}

class CreateUserService {
    async execute({ name, email, password }: UserRequest) {
        //verificar se ele enviou um email
        if (!email) {
            throw new Error("Email incorrect")
        }

        //verificar se esse email já está cadastrado na plataforma
        const userAlreadyExists = await prismaClient.user.findFirst({
            where: {
                email: email
            }
        })

        if (userAlreadyExists) {
            throw new Error("User already exists")
        }

        //Criptografando a senha antes de salvar no banco
        const passwordHash = await hash(password, 8)

        //cadastrando Usuário
        const user = await prismaClient.user.create({
            data: {
                name: name,
                email: email,
                password: passwordHash
            },
            //Informar o que vai ser devolvido da requisição 
            //Ex: não devolver o password ao criar a conta
            select: {
                id: true,
                name: true,
                email: true
            }
        })

        return user;
    }
}

export { CreateUserService }