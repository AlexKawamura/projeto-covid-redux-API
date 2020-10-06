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

    async showAll(req, res){
        const query = await Case.find().exec();
        console.log(query);
        return res.json(query)
    }
}

export default new CaseController();

//teste