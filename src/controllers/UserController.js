import User from "../models/User";

class UserController {
    async store(req, res) {
        const { nome, email, password } = req.body;

        await User.create({
            nome,
            email,
            password,
        }).then(user => {
            const { _id } = user
    
            return res.json({ _id });
        }).catch(error => {
            if (error.code === 11000) 
                return res.status(405).send('Email já existe');
            else
                return res.status(405).send('Erro desconhecido');
        });
    }
}

export default new UserController();