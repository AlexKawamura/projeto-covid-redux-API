import User from "../models/User";

class UserController {
    async store(req, res) {
        const { nome, email, password } = req.body;

        const user = await User.create({
            nome,
            email,
            password,
        });

        const { _id } = user

        return res.json({ _id });
    }
}

export default new UserController();