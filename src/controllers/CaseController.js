import Case from '../models/Case';

class CaseController {
    async store(req, res) {
        const { estado, casos, mortes, suspeitos, ultimaAtualizacao } = req.body;

        const caseStore = await Case.create({
            estado, 
            casos, 
            mortes, 
            suspeitos, 
            ultimaAtualizacao
        });

        const { _id } = caseStore

        return res.json({ _id });
    }

    async showCases(req, res){
        var casos = [];
        if (Object.keys(req.query).length > 0) {
            casos = await Case.find(req.query).exec();

            return res.json(casos)
        } else {
            casos = await Case.find().exec();

            return res.json(casos)
        }
    }
}

export default new CaseController();

//teste