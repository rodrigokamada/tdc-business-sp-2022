import BooksModel from '../models/books.model';
import logger from '../utils/logger';

class BooksController {

  public async get(): Promise<any> {
    logger.debug('Listing the books');

    const books = await BooksModel.find();

    logger.debug(`Found [${books ? books.length : 0}] books`);

    return books;
  }

  public async getById(id: string): Promise<any> {
    logger.debug(`Listing the book by id [${id}]`);

    const book = await BooksModel.findById(id);

    logger.debug(`Book [${JSON.stringify(book)}] found`);

    return book;
  }

  public async create(book: any): Promise<any> {
    logger.debug(`Creating the book [${JSON.stringify(book)}]`);

    const bookModel = new BooksModel(book);
    const bookCreated = await bookModel.save();

    logger.debug(`Book [${JSON.stringify(bookCreated)}] created`);

    return bookCreated;
  }

  public async update(id: string, book: any): Promise<any> {
    logger.debug(`Updating the book [${JSON.stringify(book)}] by id [${id}]`);

    const bookUpdated = await BooksModel.findByIdAndUpdate(id, book);

    logger.debug(`Book [${JSON.stringify(bookUpdated)}] updated by id [${id}]`);

    return bookUpdated;
  }

  public async delete(id: string): Promise<any> {
    logger.debug(`Deleting the book bu id [${id}]`);

    const bookDeleted = await BooksModel.findByIdAndRemove(id);

    logger.debug(`Book [${JSON.stringify(bookDeleted)}] deleted by id [${id}]`);

    return bookDeleted;
  }

}

export const booksController: BooksController = new BooksController();
