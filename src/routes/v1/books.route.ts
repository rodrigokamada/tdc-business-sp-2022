import { Request, Response, Router } from 'express';

import BooksModel from '../../models/books.model';
import logger from '../../utils/logger';

const router = Router();

router.get('/', async (req: Request, res: Response) => {
  logger.debug('Listing the books');

  try {
    const books = await BooksModel.find();

    logger.debug(`Found [${books ? books.length : 0}] books`);

    res.status(200).json(books);
  } catch (error) {
    logger.error('An error ocurred:', error);
    res.status(500).json(error);
  }
});

router.get('/:id', async (req: Request, res: Response) => {
  const id = req.params.id;

  logger.debug(`Listing the book by id [${id}]`);

  try {
    const book = await BooksModel.findById(id);

    logger.debug(`Book [${JSON.stringify(book)}] found`);

    res.status(200).json(book);
  } catch (error) {
    logger.error('An error ocurred:', error);
    res.status(500).json(error);
  }
});

router.post('/', async (req: Request, res: Response) => {
  const book = req.body;

  logger.debug(`Creating the book [${JSON.stringify(book)}]`);

  try {
    const bookModel = new BooksModel(book);
    const bookCreated = await bookModel.save();

    logger.debug(`Book [${JSON.stringify(bookCreated)}] created`);

    res.status(201).json(bookCreated);
  } catch (error) {
    logger.error('An error occurred:', error);
    res.status(500).json(error);
  }
});

router.put('/:id', async (req: Request, res: Response) => {
  const id = req.params.id;
  const book = req.body;

  logger.debug(`Updating the book by id [${id}]`);

  try {
    const bookUpdated = await BooksModel.findByIdAndUpdate(id, book);

    logger.debug(`Book [${JSON.stringify(bookUpdated)}] updated by id [${id}]`);

    res.status(200).json(bookUpdated);
  } catch (error) {
    logger.error('An error occurred:', error);
    res.status(500).json(error);
  }
});

router.delete('/:id', async (req: Request, res: Response) => {
  const id = req.params.id;

  logger.debug(`Deleting the book bu id [${id}]`);

  try {
    const bookDeleted = await BooksModel.findByIdAndRemove(id);

    logger.debug(`Book [${JSON.stringify(bookDeleted)}] deleted by id [${id}]`);

    res.status(200).json(bookDeleted);
  } catch (error) {
    logger.error('An error occurred:', error);
    res.status(500).json(error);
  }
});

export default router;
