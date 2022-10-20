import axios from 'axios'
export const data = async () => {
    const getData = async () => {
        let config = {
            method: 'get',
            url: 'https://storage.googleapis.com/shopify-tiers-assets-prod-us-east1/9yx8yv1h201h1df33s3zjhmghwhj?GoogleAccessId=assets-us-prod%40shopify-tiers.iam.gserviceaccount.com&Expires=1666681510&Signature=o5eoQwDJe33HD8NMrayb5glzJmIxKjkl2OXZT9WyzuAGcfPucMjIbW8YCGiO2OSgepKurkZIbYPeHPWMBK%2FKLJxTPh3fMnTZAWr6zJg11NWfOh7BIRBHm37ntiaz6fbRdlK8Ze5zL%2F5y0twIv3OeLNC36bNMPzeOoBUG5nIhidTWIbuyG7RtJc0baT%2BYa8dfkdHC4lA28gD6a8x%2FVT9Dx%2F40loEURo0xJffXUMgcnD0yTlMa0Q5Fg46HztMtDNXvR7qyM%2Bi0i0VdxH8mc0e5ci7Uw59ST2kuSG3jthGa2oUfJc8I0pqsbK7Ls3RYg6hDnwBOWgFvLJApu9QNjxVUFg%3D%3D&response-content-disposition=attachment%3B+filename%3D%22bulk-2375024935061.jsonl%22%3B+filename%2A%3DUTF-8%27%27bulk-2375024935061.jsonl&response-content-type=application%2Fjsonl',
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

        let product = data.split('{"id":"gid:\\/\\/shopify\\/Product\\/')
        let newproduct = product.map((x) => {
            return x = '{"id":"gid:\/\/shopify\/Product\/' + x
        })
        newproduct.shift()


        const obj = (data) => {
            let myArr = [];
            const lines = data.split(/\n/);
            lines.forEach(line => {
                if (line.includes("{") && line.includes("}")) {
                    const object = JSON.parse(line);
                    myArr.push(object)
                }

            });

            let firstObj = myArr[0];
            let inColArray = [];
            let images = [];
            let metafields = [];
            let variants = [];
            myArr.forEach(x => {
                if (Object.keys(x).indexOf("__parentId") != -1) {
                    if (x.id && x.id.includes("Collection")) {
                        inColArray.push(x.id.slice(x.id.lastIndexOf("/") + 1));
                    }
                    if (x.src) {
                        images.push(x.src);
                    }
                    if (x.namespace) {
                        metafields.push(x);
                    }
                    if (x.sku) {
                        variants.push(x);
                    }
                }
            });

            firstObj["in_collection"] = inColArray;
            firstObj["images"] = images;
            firstObj["metafields"] = metafields;
            firstObj["variants"] = variants;
            return firstObj
        }

        let finalJsonData = newproduct.map((x) => {
            return obj(x)

        })
        return finalJsonData
    }
    let filterData = await postData()

    // filterData.forEach((x) => {
    //     let tagArray = x.tags
    //     let keyArr = [];
    //     tagArray.forEach(x => {
    //         if (x.includes('filter')) {
    //             let arr = x.split("_");
    //             if (keyArr.indexOf(arr[1]) === -1) {
    //                 keyArr.push(arr[1]);
    //             }
    //         }
    //     })
    //     let outputArr = [];
    //     keyArr.forEach(x => {
    //         let valueArr = [];
    //         tagArray.forEach(y => {
    //             if (y.includes("filter_" + x)) {
    //                 let a = y.split('_')
    //                 valueArr.push(a[2]);
    //             }
    //         })
    //         outputArr.push({
    //             [x]: valueArr
    //         })

    //     })
    //     outputArr.forEach((y) => {
    //         x["pf_t_" + Object.keys(y)[0].replaceAll(" ", "_")] = y[Object.keys(y)[0]]
    //     })
    // })

    filterData.forEach((x) => {
        x.id = x.id.replace("gid://shopify/Product/", "");
        let available = false;
       let varAv =  x.variants.map(y=>y.availableForSale);
       if(varAv.indexOf(true)  != -1) available = true;
       if(!available){
        let iPolicy  = x.variants.map(y=>y.inventoryPolicy.toLowerCase());
        if(iPolicy.indexOf("continue") != -1) available = true
       }
       x.product_available = available;
    })

    // console.log(filterData[0])
    return filterData
}



