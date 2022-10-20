import mongoose from "mongoose";
const { Schema, SchemaTypes, model } = mongoose;
const ProductSchema = new Schema(
    {
        id: {
            type: String,
            unique: true,
            required: true
        },
        title: {
            type: String,
            required: true
        },
        productType: {
            type: String,
            // required: true
        },
        onlineStoreUrl: {
            type: String,
            // required: true
        },
        tags: {
            type: Array,
            required: true
        },
        options: {
            type: Array,
            required: true
        },
        priceRangeV2: {
            type: Object,
            required: true
        },
        in_collection: {
            type: Array,
            required: true
        },
        images: {
            type: Array,
            required: true
        },
        metafields: {
            type: Array,
            required: true
        },
        variants: {
            type: Array,
            required: true
        },
        product_available: {
            type: Boolean,
            required: true
        }
        // ,
        // pf_t_size: {
        //     type: Array
        // }, pf_t_category: {
        //     type: Array
        // }, pf_t_colour: {
        //     type: Array
        // }, pf_t_style: {
        //     type: Array
        // }, pf_t_gender: {
        //     type: Array
        // }
    },
    { timestamps: true }
)

// Product.pre("save", async function (next) {
//     try {

//         next()
//     } catch (e) {
//         next(e)
//     }
// })

export const Product = model("product", ProductSchema);
