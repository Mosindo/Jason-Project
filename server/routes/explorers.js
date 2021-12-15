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
router.get('/', getAllExplorers);
router.post('/', createNewExplorer);
router.get('/:id', getExplorer);
router.patch('/:id', updateExplorer);
router.delete('/:id', deleteExplorer);

export default router;
