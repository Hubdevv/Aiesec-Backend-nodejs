import { model, Schema } from "mongoose";

const blogSchema = new Schema({
    blogID: {
        type: String,
    },

    description: {
        type: String,
        required: [true, "Description is required"],
    },
    image: {
        type: String,
        required: [true, "Image is required"],
    },
});

export default model("Blog", blogSchema);