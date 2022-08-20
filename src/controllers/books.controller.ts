import { Body, Delete, Get, Path, Post, Put, Route } from 'tsoa';

import BooksModel from '../models/books.model';
import logger from '../utils/logger';

@Route('v1/books')
class BooksController {
  @Get('/')
  public async get(): Promise<any> {
    logger.debug('Listing the books');

    const books = await BooksModel.find();

    logger.debug(`Found [${books ? books.length : 0}] books`);

    return books;
  }

  @Get('/{id}')
  public async getById(@Path() id: string): Promise<any> {
    logger.debug(`Listing the book by id [${id}]`);

    const book = await BooksModel.findById(id);

    logger.debug(`Book [${JSON.stringify(book)}] found`);

    return book;
  }

  @Post('/')
  public async create(@Body() book: any): Promise<any> {
    logger.debug(`Creating the book [${JSON.stringify(book)}]`);

    const bookModel = new BooksModel(book);
    const bookCreated = await bookModel.save();

    logger.debug(`Book [${JSON.stringify(bookCreated)}] created`);

    return bookCreated;
  }

  @Put('/{id}')
  public async update(@Path() id: string, @Body() book: any): Promise<any> {
    logger.debug(`Updating the book [${JSON.stringify(book)}] by id [${id}]`);

    const bookUpdated = await BooksModel.findByIdAndUpdate(id, book);

    logger.debug(`Book [${JSON.stringify(bookUpdated)}] updated by id [${id}]`);

    return bookUpdated;
  }

  @Delete('/{id}')
  public async delete(id: string): Promise<any> {
    logger.debug(`Deleting the book bu id [${id}]`);

    const bookDeleted = await BooksModel.findByIdAndRemove(id);

    logger.debug(`Book [${JSON.stringify(bookDeleted)}] deleted by id [${id}]`);

    return bookDeleted;
  }
}

const booksController: BooksController = new BooksController();

export default booksController;
