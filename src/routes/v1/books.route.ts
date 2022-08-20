import { Request, Response, Router } from 'express';

import BooksModel from '../../models/books.model';
import logger from '../../utils/logger';

const router = Router();

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

export default router;
