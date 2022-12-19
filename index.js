import express, { urlencoded, json } from "express";
import { config } from "dotenv";
import { connect } from "./db";
import { Product } from './model/product_model.js'
import { data } from './Product'
import ProductRouter from './routes/Product_routes.js'
import { find } from "./tagsFiltered";
import cors from "cors";
import { collection_data } from "./collection";
import { Collection } from "./model/Collection_model";
config();
const app = express();
const PORT = process.env.PORT || 5000;
app.use(json());
app.use(cors());
app.use(urlencoded({ extended: true }));
app.use('/api/product', ProductRouter)

const collection = async () => {
try{

    const data = await collection_data();

console.log(typeof data);

let myArr = [];
const lines = data.split(/\n/);
lines.forEach(line => {
    if (line.includes("{") && line.includes("}")) {
        const object = JSON.parse(line);
        myArr.push(object)
    }

});

let col_id_arr = myArr.filter(x=>!x.__parentId);
let documentArr = [];
col_id_arr.forEach(x=>{
    let pro_ids = [];
    myArr.forEach(y=>{
        if(y.__parentId === x.id){
            pro_ids.push(y.id.slice(y.id.lastIndexOf("/")+1));
        }
    });
    documentArr.push({
        collection_id : x.id.slice(x.id.lastIndexOf("/")+1),
        product_ids: pro_ids
    });
});

// console.log(documentArr);
try{
    let something = await Collection.insertMany(documentArr);
    console.log(something);
} catch(e){
    console.log(e);
}



} catch (e) {
    console.log(e)
}
}
// collection()



//  find() This will be use for our making d/f tags
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