import { Router } from "express";
import { getData } from "../controller/Collection_Controller";
const router = Router();

router.route('/').get(getData)



export default router;