import { Router } from "express";
import { getProductById, getProducts } from "../controller/Product_Controller";
const router = Router();

router.route('/').get(getProducts)
router.route('/:id').get(getProductById)
// router.route('keys').post(postNewSchemaTypes)


export default router;