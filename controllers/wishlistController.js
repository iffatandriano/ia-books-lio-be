
import Wishlist from '../models/Wishlist.js';

// create wishlist
export const createWishlist = async (req, res) => {
    const newWishlist = new Wishlist(req.body);

    try {
        const savedWishlist = await newWishlist.save();

        res.status(200)
            .json({
                success: true,
                message: 'Succesfully add to wishlist',
                data: savedWishlist
            })

    } catch(error) {
        res.status(500)
            .json({
                success: false,
                message: 'Failed to add wishlist, please try again!'
            })
    }
}

// get wishlist
export const getWishlist = async (req, res) => {
    const page = parseInt(req.query.page);

    try {
        const wishlists = await Wishlist.find({})
            .skip(page * 8)
            .limit(8);

        res.status(200)
            .json({
                success: true,
                message: 'Successfull',
                data: wishlists
            })
    } catch(error) {
        res.status(404).json({
            success: false,
            message: 'Not found'
        })
    }
}

// delete wishlist
export const deleteWishlist = async (req, res) => {
    const id = req.params.id;

    try {
        await Wishlist.findByIdAndDelete(id);

        res.status(200)
            .json({
                success: true,
                message: 'Successfully deleted.',
            })
    } catch(error) {
        res.status(500)
            .json({
                success: false,
                message: 'Failed to delete item from wishlist!'
            })
    }
}