import mongoose from "mongoose";

const wishlistSchema = mongoose.Schema(
    {
        id: {
            type: String,
            required: true,
            unique: true
        },
        title: {
            type: String,
            required: true
        },
        description: {
            type: String,
        },
        authors: {
            type: String,
            required: true
        },
        rating: {
            type: Number,
            required: true,
        },
        images: {
            type: String,
            required: true
        }
    },
    { timestamps: true }
);

export default mongoose.model('Wishlist', wishlistSchema);