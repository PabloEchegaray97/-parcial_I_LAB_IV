import express from 'express'
import {getAllAuthors, getAuthorById, createAuthor, deleteAuthor, updateAuthor, addBookToAuthor } from '../controllers/authorController.js'

export const router = express.Router();

router.get('/', getAllAuthors);
router.get('/:id', getAuthorById);
router.post('/', createAuthor);
router.put('/:id', updateAuthor);
router.put('/:authorId/addBook/:bookId', addBookToAuthor )
router.delete('/:id', deleteAuthor)


// import express from 'express'
// import {getAllResearchers, getResearcherById, createResearcher, updateResearcher, deleteResearcher, getResearcherProjects, getResearcherPublications, addProjectToResearcher} from '../controllers/researcherController.js'

// export const router = express.Router()

// router.get('/', getAllResearchers)
// router.get('/:id', getResearcherById)
// router.post('/', createResearcher)
// router.put('/:id', updateResearcher)
// router.delete('/:id', deleteResearcher)
//router.get('/:id/projects', getResearcherProjects)
//router.get('/:id/publications', getResearcherPublications)
//router.post('/:id/projects', addProjectToResearcher)