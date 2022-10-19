import mongoose from "mongoose";
const { Schema, SchemaTypes, model } = mongoose;
const ProductSchema = new Schema(
    {
        id: {
            type: Number,
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
        pf_t_in_stock_size: {
            type: Array
        }, pf_t_category: {
            type: Array
        }, pf_t_colour: {
            type: Array
        }, pf_t_style: {
            type: Array
        }, pf_t_gender: {
            type: Array
        }
    },
    { timestamps: true }
)

export const Product = model("product", ProductSchema);
