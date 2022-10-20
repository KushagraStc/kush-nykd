import express, { urlencoded, json } from "express";
import { config } from "dotenv";
import { connect } from "./db";
import { Product } from './model/product_model.js'
import { data } from './Product'
import ProductRouter from './routes/Product_routes.js'
config();
const app = express();
const PORT = process.env.PORT || 5000;
app.use(json());
app.use(urlencoded({ extended: true }));
app.use('/api/product', ProductRouter)

const addData = async () => {
    try {

        const Data = await data()
        let res
        if (Data) {
            console.log(Data.length)
            res = await Product.insertMany(Data.slice(300, 754))

        }
        if (res) {
            console.log('data added successfully')
        }

        else {
            console.log('something went wrong')
        }
    } catch (e) {
        console.log(e)
    }

}
// addData()
const start = async () => {
    try {
        connect();
        app.listen(PORT, () => {
            console.log(`REST API on http://localhost:${PORT}`);
        });
    } catch (e) {
        console.error(e);
    }
};
start()