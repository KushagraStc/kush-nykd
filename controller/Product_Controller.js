import { Product } from "../model/product_model";
export const getProducts = async (req, res) => {
    try {
        const result = await Product.find()
        res.json({
            status: "OK",
            pageResults: result.length,
            data: result,
        });
    } catch (e) {
        res.status(500).json({ message: "Error getting Products " });
    }
}


export const getProductById = async (req, res) => {
    try {
        const id = req.params.id;
        if (!id) {
            return res.status(400).josn({ message: "id is required" })
        }
        const data = await Product.find({ id })
        res.json({ status: "OK", data })
    } catch (e) {
        res.status(500).json({ message: "Error getting data" })
    }
}

// export const postNewSchemaTypes = async (req, res) => {
//     try {
//         const schemaKeys = req.body.keys;
//         if (!schemaKeys) {
//             return res.status(400).json({ message: "keys are required" })
//         }
//         await new Product(schemaKeys).save()

//     } catch (e) {
//         console.log(e)
//         res.status(500).json({ message: "Error getting data" })

//     }


// }