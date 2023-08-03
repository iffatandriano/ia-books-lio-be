import axios from 'axios';

const baseUrl = 'https://www.googleapis.com/books/v1/volumes';

// search books from google api books
export const searchBook = async (req, res) => {

    const query = req.query.search || '';
    const limitResults = parseInt(req.query.limit) || 8;
    const pageNumber = parseInt(req.query.page) || 1;

    const params = {
        q: query, 
        maxResults: limitResults,
        startIndex: (pageNumber - 1) * limitResults,
    };

    try {
        const response = await axios.get(baseUrl, { params });

        const books = response.data.items?.map((item) => ({
            id: item.id,
            title: item.volumeInfo.title,
            authors: item.volumeInfo.authors ? item.volumeInfo.authors.join(', ') : '',
            images: item.volumeInfo.imageLinks ? item.volumeInfo.imageLinks : {},
            rating: item.volumeInfo.averageRating || 0,
            description: item.volumeInfo.description || '',
        })) || [];

        res
            .status(200)
            .json({
                success: true,
                message: 'Successfully search books',
                data: books,
            })
    } catch(error) {
        res.status(500)
            .json({ success: false, message: `Error occured: ${error.message}, please try again!` });
    }
}

export const categoryBook = async (req, res) => {
    const query = req.query.search ? `business+subject:${req.query.search}` : 'business+subject:Autobiography';
    const limitResults = parseInt(req.query.limit) || 8;
    const pageNumber = parseInt(req.query.page) || 1;

    const params = {
        q: query, 
        maxResults: limitResults,
        startIndex: (pageNumber - 1) * limitResults,
    };

    try {
        const response = await axios.get(baseUrl, { params });

        const books = response.data.items?.map((item) => ({
            id: item.id,
            title: item.volumeInfo.title,
            authors: item.volumeInfo.authors ? item.volumeInfo.authors.join(', ') : '',
            images: item.volumeInfo.imageLinks ? item.volumeInfo.imageLinks : {},
            rating: item.volumeInfo.averageRating || 0,
            description: item.volumeInfo.description || '',
        })) || [];

        res
            .status(200)
            .json({
                success: true,
                message: 'Successfully search books',
                data: books,
            })
    } catch(error) {
        res.status(500)
            .json({ success: false, message: `Error occured: ${error.message}, please try again!` });
    }
}