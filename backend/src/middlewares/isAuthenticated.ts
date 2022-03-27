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

    //ignora o primeiro item 'Bearer' e pega só a string depois do espaço que é o TOKEN
    const [, token] = authToken.split(" ")

    try {
        //validar o token
        const { sub } = verify(
            token,
            process.env.JWT_SECRET
        ) as Payload; //o dado que vai ser devolvido será do tipo Payload

        return next();

    } catch (err) {
        //Token não batendo com o token do usuário
        return res.status(401).end();
    }
    console.log(token);
}