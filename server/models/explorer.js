import mongoose from 'mongoose';

const explorerSchema = mongoose.Schema({
    firstname: {
        type: String,
        required: true,
    },
    lastname: {
        type: String,
        required: true,
    },
});
const Explorers = mongoose.model('Explorers', explorerSchema);
export default Explorers;
