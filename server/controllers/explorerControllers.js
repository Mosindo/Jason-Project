import express from 'express';
import mongoose from 'mongoose';

import explorer from '../models/explorer.js';

const router = express.Router();

export const getAllExplorers = async (req, res) => {
    const Explorers = await explorer.find();
    if (!Explorers) return res.status(204).json({ message: 'No Explorers found.' });
    res.json(Explorers);
    try {
        const explorers = await explorer.find();
        console.log(explorers);
        res.status(200).json();
    } catch (err) {
        res.status(404).json({ message: err.message });
    }
};

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

export const updateExplorer = async (req, res) => {
    // if (!req?.body?.id) {
    //     return res.status(400).json({ message: 'ID parameter is required.' });
    // }

    // const Explorer = await explorer.findOne({ _id: req.body.id }).exec();
    // if (!Explorer) {
    //     return res.status(204).json({ message: `No Explorer matches ID ${req.body.id}.` });
    // }
    // if (req.body?.firstname) Explorer.firstname = req.body.firstname;
    // if (req.body?.lastname) Explorer.lastname = req.body.lastname;
    // const result = await Explorer.save();
    // res.json(result);
    const { id } = req.params;
    const { firstname, lastname } = req.body;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

    const updatedExplorer = { firstname, lastname, _id: id };

    await explorer.findByIdAndUpdate(id, updatedExplorer, { new: true });

    res.json(updatedExplorer);
};

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
    // if (!req?.params?.id) return res.status(400).json({ message: 'Employee ID required.' });
    // try {
    //     const explorer = await explorer.findOne({ _id: req.params.id }).exec();
    //     res.status(200).json(explorer);
    // } catch (err) {
    //     res.status(404).json({ message: err.message });
    // }
    const { id } = req.params;

    try {
        const GetOneExplorer = await explorer.findById(id);

        res.status(200).json(GetOneExplorer);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

export default router;
