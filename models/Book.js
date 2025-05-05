import mongoose from 'mongoose';

const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    summary: {
        type: String,
        required: false
    },
    genre: {
        type: String,
        required: true
    },
    publication: {
        type: Date,
        required: true
    },
    available: {
        type: Boolean,
        default: true
    }
}, { timestamps: true });   

const Book = mongoose.model('Book', bookSchema);
export default Book;

