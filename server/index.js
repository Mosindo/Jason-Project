import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import explorerRoutes from './routes/explorers.js';
import dotenv from 'dotenv';
import path from 'path';

dotenv.config();

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

// deployement
const __dirname = path.resolve();

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '/build')));

    app.get('*', (req, res) =>
        res.sendFile(path.resolve(__dirname, 'build', 'index.html')),
    );
} else {
    app.get('/', (req, res) => {
        res.send('API is running..');
    });
}
// connection to the database
mongoose
    .connect(process.env.MONGODB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => app.listen(PORT, () => console.log('Server is Running')))
    .catch((error) => console.log(`${error} did not connect`));
