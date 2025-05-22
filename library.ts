// Library
import { Book } from "./book";
import { Member } from "./members";

export class Library {
  public name : string;
  private nextBookId: number = 1;
  private nextMemberId: number = 1;
  private books: Book[] = [ ];
  private members: Member[] = [];

  constructor(name: string) {
    this.name = name;
  }

  addBook(title: string, author: string): void {
    const book = new Book (this.nextBookId++, title, author)
    this.books.push(book);
  }

  registerMember(name: string): void {
    const member = new Member(this.nextMemberId++, name)
    this.members.push(member);
  }

  listMembers(): Member[] {
    return this.members;
  }

  listAvailableBooks(): Book[] {
   return this.books.filter(book => book.isAvailable)
  }

  removeBook(book: Book , id : number): void {
    const index = this.books.findIndex(book => book.id === id);
    if (index !== -1) {
    this.books.splice(index, 1);
    console.log(`The book ${book.title} with ID - ${book.id} has been removed.`);
    } else {
    console.log("Book not found.");
   }
  };

  removeMember(member : Member, id :  number) : void {
    const index = this.members.findIndex( member => member.id === id);
    if (index !== -1) {
      this.members.splice(index, 1);
      console.log(`This member ${member.name} with ID - ${member.id} has been removed`)
    }else { console.log(`Member not found`)}
  }
}