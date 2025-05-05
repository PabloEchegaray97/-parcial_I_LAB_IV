import Author from '../models/Author.js';
import Book from '../models/Book.js';

export const getAllBooks = async (req, res) => {
    try {
        const books = await Book.find();
        res.status(200).json(books);
    } catch (error) {
        console.error('Error fetching books:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
}

export const getBookById = async (req, res) => {
    const { id } = req.params;
    try {
        const book = await Book.findById(id);
        if (!book) {
            return res.status(404).json({ message: 'Book not found' });
        }
        res.status(200).json(book);
    } catch (error) {
        console.error('Error fetching book:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
}

export const createBook = async (req, res) => {
    const { title, genre, publication, author, summary} = req.body;
    try {
        const newBook = new Book({ title, summary, genre, publication, author });
        await newBook.save();
        res.status(201).json(newBook);
    } catch (error) {
        console.error('Error creating book:', error);
        res.status(400).json({ message: 'Bad request' })    ;
    }
}

export const updateBook = async (req, res) => {
    const { id } = req.params;
    const { title, summary, genre, publication, author } = req.body;
    try {
        const updatedBook = await Book.findByIdAndUpdate(
            id,
            { title, summary, genre, publication, author }
        );
        if (!updatedBook) {
            return res.status(404).json({ message: 'Book not found' });
        }
    } catch (error) {
        console.error('Error updating book:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
}
export const deleteBook = async (req, res) => {
    const { id } = req.params;
    try {
        const deletedBook = await Book.findByIdAndDelete(id);
        if (!deletedBook) {
            return res.status(404).json({ message: 'Book not found' });
        }
        res.status(200).json({ message: 'Book deleted successfully' });
    } catch (error) {
        console.error('Error deleting book:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
}