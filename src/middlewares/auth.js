import 'dotenv/config';

import jwt from 'jsonwebtoken';

export default (req, res, next) => {
    //const authHeader = req.headers.authorization;
    const { cookies } = req

    //if(!authHeader) return res.status(401).send('Token não fornecido');
    if(!("token" in cookies))  return res.status(401).send('Token não fornecido');

    //const [, token ] = authHeader.split(' '); 

    try {
        const payload = jwt.verify(cookies.token, process.env.APP_SECRET);

        req.userId = payload.userId;

        return next();
    } catch (err) {
        return res.status(401).send('Token invalido');
    }
};