import { Request, Response, NextFunction } from "express";
import { verify } from 'jsonwebtoken';

//tipando Payload
interface Payload {
    sub: string;
}

export function isAuthenticated(
    req: Request,
    res: Response,
    next: NextFunction
) {
    //Receber o token
    const authToken = req.headers.authorization;

    if (!authToken) {
        return res.status(401).end();
    }

    //ignora o primeiro item 'Bearer' e mostra só a string depois do espaço que é o TOKEN
    const [, token] = authToken.split(" ")

    try {
        //validar o token
        const { sub } = verify(
            token,
            process.env.JWT_SECRET
        ) as Payload; //o dado que vai ser devolvido será do tipo Payload

        //Recuperar o id do token e colocar dentro de uma variável user_id dentro do req
        req.user_id = sub;

        return next();

    } catch (err) {
        //Se o Token não bater com o token do usuário
        return res.status(401).end();
    }

}