import { Request, Response, Router } from 'express';

import BooksModel from '../../models/books.model';
import logger from '../../utils/logger';

const router = Router();

router.post('/', async (req: Request, res: Response) => {
  const book = req.body;

  logger.debug(`Creating the book [${JSON.stringify(book)}]`);

  try {
    const bookModel = new BooksModel(book);
    const newBook = await bookModel.save();

    res.status(201).json(newBook);
  } catch (error) {
    logger.error('An error occurred:', error);
    res.status(500).json(error);
  }
});

export default router;
