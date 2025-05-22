// Members
import { Book } from "./book";

export class Member {
  public id : number;
  public name: string;
  private borrowedBooks: Book[] = [];

  constructor( id: number, name: string) {
    this.id = id
    this.name = name;
  }

  borrowBook(book: Book): void {
    if (book.isAvailable) {
      book.borrow();
      this.borrowedBooks.push(book);
    } else {
      console.log(`${book.title} is not available.`);
    }
  }

  returnBook(book: Book): void {
    const index = this.borrowedBooks.indexOf(book);
    if (index !== -1) {
      this.borrowedBooks.splice(index, 1);
      book.returnBook();
    } else {
      console.log(`${this.name} did not borrow ${book.title}.`);
    }
  }
}