import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import explorerRoutes from './routes/explorers.js';
import dotenv from 'dotenv';

dotenv.config();

const CONNECTION_URL = process.env.MONGODB_URI;
const PORT = process.env.PORT || 5000;

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

// connection to the database
mongoose
    .connect(CONNECTION_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => app.listen(PORT, () => console.log('Server is Running')))
    .catch((error) => console.log(`${error} did not connect`));
