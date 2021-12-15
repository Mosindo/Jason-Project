import explorer from './models/explorer.js';
import mongoose from 'mongoose';
import faker from 'faker';
import dotenv from 'dotenv';

dotenv.config();

const CONNECTION_URL = process.env.MONGODB_URI;
const PORT = process.env.PORT || 5000;

// connection to the database
mongoose
    .connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log(`Server Running on Port: http://localhost:${PORT}`))
    .catch((error) => console.log(`${error} did not connect`));

let explorers = [];
for (let i = 0; i < 50; i++) {
    explorers.push({
        // Fake first name
        firstname: faker.name.firstName(),

        // Fake last name
        lastname: faker.name.lastName(),
    });
}
const generateFakeData = async () => {
    //delete current database data and  create new data
    await explorer.deleteMany({}).exec();
    await explorer.create(explorers);
};

generateFakeData();
