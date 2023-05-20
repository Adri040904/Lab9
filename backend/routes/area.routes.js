import { Router } from "express";
import { 
    getAreas,
    createArea,
    getArea,
    deleteArea,
    updateArea
} from '../controllers/area.controller.js';
const router = Router();

router.get('/',getAreas);
router.post('/',createArea);
router.get('/:_id',getArea);
router.delete('/:_id',deleteArea);
router.put('/:_id',updateArea);

export default router;