import { json } from "express";
import { Product } from "./model/product_model";

export const find = async () => {
    let res = await Product.aggregate([
        {
            $project: {
                id: 1,
                tags: 1
            }
        }, {
            $sort: {
                _id: 1
            }
        }, {
            $skip: 250
        },
    ]);
    // console.log(res,'res')


    res.forEach(async (pro) => {

        let tagArray = pro.tags;


        let keyArr = [];
        tagArray.forEach(x => {
            if (x.includes('filter')) {
                let arr = x.split("_");
                if (keyArr.indexOf(arr[1]) === -1) {
                    keyArr.push(arr[1]);
                }
            }
        })
        let outputArr = [];
        keyArr.forEach(x => {
            let valueArr = [];
            tagArray.forEach(y => {
                if (y.includes("filter_" + x)) {
                    let a = y.split('_')
                    valueArr.push(a[2]);
                }
            })
            outputArr.push([
                [x], valueArr
            ])

        })
        let myobj = Object.fromEntries(outputArr);




        //    console.log(myobj);


        let anything = await Product.updateOne(
            { id: pro.id },
            { $set: { filter: myobj } }, {
            upsert: true, multi: false
        }
        );
        console.log(anything);

    })



}