import mongoose from 'mongoose';

import explorer from '../models/explorer.js';

// function retrieve and return all users
export const getAllExplorers = async (req, res) => {
    const Explorers = await explorer.find();
    if (!Explorers) return res.status(204).json({ message: 'No Explorers found.' });

    try {
        res.status(200).json(Explorers);
    } catch (err) {
        res.status(404).json({ message: err.message });
    }
};

// function to create new user
export const createNewExplorer = async (req, res) => {
    if (!req?.body?.firstname || !req?.body?.lastname) {
        return res.status(400).json({ message: 'firstname and last lastname are required' });
    }

    const { firstname, lastname } = req.body;

    // check for duplicate usernames in the db
    const duplicate = await explorer.findOne({ firstname: firstname, lastname: lastname }).exec();
    if (duplicate) return res.sendStatus(409); //Conflict
    try {
        //create and store the new vexplorer
        const result = await explorer.create({
            firstname: req.body.firstname,
            lastname: req.body.lastname,
        });

        res.status(200).json(result);
    } catch (err) {
        res.status(404).json({ message: error.message });
        console.error(err);
    }
};

// function to update user
export const updateExplorer = async (req, res) => {
    const { id } = req.params;
    const { firstname, lastname } = req.body;
    try {
        if (!mongoose.Types.ObjectId.isValid(id))
            return res.status(404).send(`No post with id: ${id}`);

        const updatedExplorer = { firstname, lastname, _id: id };

        await explorer.findByIdAndUpdate(id, updatedExplorer, { new: true });

        res.json(updatedExplorer);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

// function to update user
export const deleteExplorer = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);
    try {
        await explorer.deleteOne({ _id: id });

        res.json({ message: 'explorer deleted successfully.' });
    } catch (error) {
        res.status(404).json({ message: error.message });
        console.error(err);
    }
};

export const getExplorer = async (req, res) => {
    const { id } = req.params;

    try {
        const GetOneExplorer = await explorer.findById(id);

        res.status(200).json(GetOneExplorer);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};
