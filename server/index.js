import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import explorerRoutes from './routes/explorers.js';
import dotenv from 'dotenv';
import path from 'path';

dotenv.config();

const CONNECTION_URL = process.env.MONGODB_URI;
const PORT = process.env.PORT || 5000;

const app = express();

app.use(
    bodyParser.json({
        extended: true,
    }),
);
app.use(
    bodyParser.urlencoded({
        extended: true,
    }),
);
app.use(cors());

// routes
app.use('/api', explorerRoutes);

app.get('/', (req, res) => {
    res.sendFile('bro you did it!');
});
// connection to the database
mongoose
    .connect(CONNECTION_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => app.listen(PORT, () => console.log('Server is Running')))
    .catch((error) => console.log(`${error} did not connect`));
