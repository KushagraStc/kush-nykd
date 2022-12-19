import axios from 'axios'
import { Collection } from './model/Collection_model';
import { Product } from './model/product_model';

export const collection_data = async () => {
    const getData = async () => {
        let config = {
            method: 'get',
            url: 'https://storage.googleapis.com/shopify-tiers-assets-prod-us-east1/3s0ulcg5qcd702faqi49o37em29g?GoogleAccessId=assets-us-prod%40shopify-tiers.iam.gserviceaccount.com&Expires=1666679778&Signature=LVEPyPVJkSkPKMPLvdrxHpj%2F3tjSlPzsZxmFqdGtrsXR725y%2FnOkKM3q23PoyYimNa1if2pGBfF%2F6amSelaDYVcFpsiYeAo5dYzIjMCJGEDB0BKNQ9L1M4vXC6ZPxxmKLjmY5Vn8EjMOaAcGjKFhmAPwCoECWYMOaMevodv9pZxvkL%2FFBfh0sApdeYPGhCmzdBoZngHY%2BZ9h5MChO3vfTV7vJnF7mxPe8V2OryxqgQ6Vfmh1oT8KopuIo6ezT5KLJeqtj5MsgGc%2BmfD9O%2FoU%2Fs4ah0H%2BuRHcW2lnn4ToE%2BgJuoDePoqwR2%2BDW7J0O117Z68I%2FAeLelEY6dQD2dYabQ%3D%3D&response-content-disposition=attachment%3B+filename%3D%22bulk-2374898876565.jsonl%22%3B+filename%2A%3DUTF-8%27%27bulk-2374898876565.jsonl&response-content-type=application%2Fjsonl',
            headers: {}
        };
        return axios(config)
            .then(function (response) {
                return response.data


            })
            .catch(function (error) {
                console.log(error);
            });
    }
    const postData = async () => {
        let data = await getData()

        // console.log(data.slice(0,500));
        return data
            // let product = data.split('{"id":"gid:\\/\\/shopify\\/Product\\/')
            // let newproduct = product.map((x) => {
            //     return x = '{"id":"gid:\/\/shopify\/Product\/' + x
            // })
            // newproduct.shift()


        //     const obj = (data) => {
        //         let myArr = [];
        //         const lines = data.split(/\n/);
        //         lines.forEach(line => {
        //             if (line.includes("{") && line.includes("}")) {
        //                 const object = JSON.parse(line);
        //                 myArr.push(object)
        //             }

        //         });

        //         let firstObj = myArr[0];
        //         let inColArray = [];
        //         let images = [];
        //         let metafields = [];
        //         let variants = [];
        //         myArr.forEach(x => {
        //             if (Object.keys(x).indexOf("__parentId") != -1) {
        //                 if (x.id && x.id.includes("Collection")) {
        //                     inColArray.push(x.id.slice(x.id.lastIndexOf("/") + 1));
        //                 }
        //                 if (x.src) {
        //                     images.push(x.src);
        //                 }
        //                 if (x.namespace) {
        //                     metafields.push(x);
        //                 }
        //                 if (x.sku) {
        //                     variants.push(x);
        //                 }
        //             }
        //         });

        //         firstObj["in_collection"] = inColArray;
        //         firstObj["images"] = images;
        //         firstObj["metafields"] = metafields;
        //         firstObj["variants"] = variants;
        //         return firstObj
        //     }

        //     let finalJsonData = newproduct.map((x) => {
        //         return obj(x)

        //     })
        //     return finalJsonData
        // }
        // let filterData = await postData()

        // // filterData.forEach((x) => {
        // //     let tagArray = x.tags
        // //     let keyArr = [];
        // //     tagArray.forEach(x => {
        // //         if (x.includes('filter')) {
        // //             let arr = x.split("_");
        // //             if (keyArr.indexOf(arr[1]) === -1) {
        // //                 keyArr.push(arr[1]);
        // //             }
        // //         }
        // //     })
        // //     let outputArr = [];
        // //     keyArr.forEach(x => {
        // //         let valueArr = [];
        // //         tagArray.forEach(y => {
        // //             if (y.includes("filter_" + x)) {
        // //                 let a = y.split('_')
        // //                 valueArr.push(a[2]);
        // //             }
        // //         })
        // //         outputArr.push({
        // //             [x]: valueArr
        // //         })

        // //     })
        // //     outputArr.forEach((y) => {
        // //         x["pf_t_" + Object.keys(y)[0].replaceAll(" ", "_")] = y[Object.keys(y)[0]]
        // //     })
        // // })

        // filterData.forEach((x) => {
        //     x.id = x.id.replace("gid://shopify/Product/", "");
        //     let available = false;
        //    let varAv =  x.variants.map(y=>y.availableForSale);
        //    if(varAv.indexOf(true)  != -1) available = true;
        //    if(!available){
        //     let iPolicy  = x.variants.map(y=>y.inventoryPolicy.toLowerCase());
        //     if(iPolicy.indexOf("continue") != -1) available = true
        //    }
        //    x.product_available = available;
        // })

        // // console.log(filterData[0])
        // return filterData
    }
    let data = await postData()
    return data
}




