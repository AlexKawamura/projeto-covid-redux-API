import { Schema, model } from 'mongoose';

const CaseSchema = new Schema({
    estado: {
        type: String,
        required: true,
    },
    casos: {
        type: Number,
        required: true
    },
    mortes: {
        type: Number,
        required: true,
    },
    suspeitos: {
        type: Number,
        required: true,
    },
    ultimaAtualizacao: {
        type: Date,
        required: true,
    },
    
});

export default new model('Case', CaseSchema);
