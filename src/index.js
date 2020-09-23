import 'dotenv/config';

import express from 'express';
import mongoose from 'mongoose';

import routes from './routes';

const MONGO_URI = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.pd40a.mongodb.net/projetoCovid?retryWrites=true&w=majority`;

const app = express();

app.use(express.json());

mongoose.connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
});

mongoose.connection.on('connected', () => {
    console.log('Mongoose connected');
});

app.use(routes);

app.listen(8000);
console.log('Server is running at http://localhost:8000');

//projeto3covid