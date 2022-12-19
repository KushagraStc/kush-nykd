import mongoose from "mongoose";
const { Schema, model } = mongoose;
const CollectionSchema = new Schema(
    {
        collection_id: {
            type: String,
            unique: true,
            required: true
        },
        product_ids: {
            type: Array,

        },

    },
    { timestamps: true }
)
export const Collection = model("collection", CollectionSchema);