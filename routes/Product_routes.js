import { Router } from "express";
import { fetchingData, filteredData, getProductById, getProducts, initialData } from "../controller/Product_Controller";
const router = Router();

router.route('/').get(getProducts)
router.route('/:id').get(getProductById)
router.route('/initial').post(initialData)
router.route('/fetch').post(fetchingData)
router.route('/filtered').post(filteredData)
// router.route('keys').post(postNewSchemaTypes)


export default router;