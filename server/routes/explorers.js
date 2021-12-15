import express from 'express';
import {
    getAllExplorers,
    createNewExplorer,
    getExplorer,
    updateExplorer,
    deleteExplorer,
} from '../controllers/explorerControllers.js';

const router = express.Router();

// API
router.get('/api', getAllExplorers);
router.post('/api', createNewExplorer);
router.get('/api/:id', getExplorer);
router.patch('/api/:id', updateExplorer);
router.delete('/api/:id', deleteExplorer);

export default router;
