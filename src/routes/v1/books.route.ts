import { Request, Response, Router } from 'express';

import booksController from '../../controllers/books.controller';
import logger from '../../utils/logger';

const router = Router();

router.get('/', async (req: Request, res: Response) => {
  try {
    const books = await booksController.get();

    res.status(200).json(books);
  } catch (error) {
    logger.error('An error ocurred:', error);
    res.status(500).json(error);
  }
});

router.get('/:id', async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const book = await booksController.getById(id);

    if (book) {
      res.status(200).json(book);
    } else {
      res.status(404).send();
    }
  } catch (error) {
    logger.error('An error ocurred:', error);
    res.status(500).json(error);
  }
});

router.post('/', async (req: Request, res: Response) => {
  const book = req.body;

  try {
    const bookCreated = await booksController.create(book);

    res.status(201).json(bookCreated);
  } catch (error) {
    logger.error('An error occurred:', error);
    res.status(500).json(error);
  }
});

router.put('/:id', async (req: Request, res: Response) => {
  const { id } = req.params;
  const book = req.body;

  try {
    const bookUpdated = await booksController.update(id, book);

    res.status(200).json(bookUpdated);
  } catch (error) {
    logger.error('An error occurred:', error);
    res.status(500).json(error);
  }
});

router.delete('/:id', async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const bookDeleted = await booksController.delete(id);

    res.status(200).json(bookDeleted);
  } catch (error) {
    logger.error('An error occurred:', error);
    res.status(500).json(error);
  }
});

export default router;
