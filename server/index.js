import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import explorerRoutes from './routes/explorers.js';

const app = express();

app.use(
    bodyParser.urlencoded({
        extended: true,
    }),
);
app.use(bodyParser.json());
app.use(cors());

// routes
app.use('/', explorerRoutes);

const CONNECTION_URL =
    'mongodb+srv://mosindo:SoLM0NiJubHEebrw@cluster0.ll5zn.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
const PORT = process.env.PORT || 5000;
// connection to the database
mongoose
    .connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() =>
        app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`)),
    )
    .catch((error) => console.log(`${error} did not connect`));
