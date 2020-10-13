import 'dotenv/config';

import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

import User from "../models/User";

class SessionController {
    async store(req, res) {
        const { email, password } = req.body;

        const user = await User.findOne({ email });

        if (!user)
            return res.status(404).send('Usuário não encontrado');

        const isPasswordCorrect = await bcrypt.compare(password, user.passwordHash);

        if (!isPasswordCorrect)
            return res.status(401).send('Senha errada');

        const token = jwt.sign({ userId: user._id}, process.env.APP_SECRET, {
            expiresIn: '7d'
        })
        
        return (
            res.json({
                token: token,
                id: user._id,
                isAdmin: user.isAdmin
            })
        )

    }
}

export default new SessionController();