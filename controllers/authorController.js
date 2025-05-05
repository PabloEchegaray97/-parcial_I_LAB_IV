import Author from '../models/Author.js';
import Book from '../models/Book.js'

export const getAllAuthors = async (req, res) => {
    try {
        const authors = await Author.find();
        res.status(200).json(authors);
    } catch (error) {
        console.error('Error fetching authors:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
}

export const getAuthorById = async (req, res) => {
    const { id } = req.params;
    try {
        const author = await Author.findById(id);
        if (!author) {
            return res.status(404).json({ message: 'Author not found' });
        }
        res.status(200).json(author);
    } catch (error) {
        console.error('Error fetching author:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
}

export const createAuthor = async (req, res) => {
    const { name, Bio, dateOfBirth, nationality, books } = req.body;
    try {
        const newAuthor = new Author({ name, Bio, dateOfBirth, nationality, books });
        await newAuthor.save();
        res.status(201).json(newAuthor);
    } catch (error) {
        console.error('Error creating author:', error);
        res.status(400).json({ message: 'Bad request' });
    }
}

export const updateAuthor = async (req, res) => {
    const { id } = req.params;
    const { name, Bio, dateOfBirth, nationality, books } = req.body;
    try {
        const updatedAuthor = await Author.findByIdAndUpdate(
            id,
            {name, Bio, dateOfBirth, nationality, books}
        );
        if (!updatedBook) {
            return res.status(404).json({message: 'Author not found'})
        }
    } catch (error) {
        console.error('Error updating author:', error)
        res.status(500).json(({message:'Internal server error'}))
    }
}

export const deleteAuthor = async (req, res) => {
    const { id } = req.params;
    try {
        const deletedAuthor = await Author.findByIdAndDelete(id);
        if (!deletedAuthor) {
            return res.status(404).json({message: 'Author not found'});
        }
    }       
    catch(error) {
        console.error('Error deleting Author', error);
        res.status(500).json({message: 'Internal server error'})
    }
}

export const addBookToAuthor = async (req, res) => {
    const { authorId, bookId } = req.params;
    try {
        const author = await Author.findById(authorId);
        const book = await Book.findById(bookId);
        if (!author || !book) {
            return res.status(404).json({message: 'Author or Book not found'})
        } 
        author.books.push(book._id);
        await author.save();
        res.status(200).json(author)
    } catch (error) {
        console.error('Error adding Book to Author:', error);
        res.status(500).json({message: 'Internal server error'});
    }
}


/*
export const addProjectToResearcher = async (req, res) => {
    const { researcherId, projectId } = req.body;
    try {
        const researcher = await Researcher.findById(researcherId);
        const project = await Project.findById(projectId);
        if (!researcher || !project) {
            return res.status(404).json({ message: 'Researcher or project not found' });
        }
        researcher.projects.push(project._id);
        await researcher.save();
        res.status(200).json(researcher);
    } catch (error) {
        console.error('Error adding project to researcher:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
}



*/