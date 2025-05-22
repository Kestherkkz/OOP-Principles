// Books

export class Book {
  public id : number;
  public title: string;
  public author: string;
  public isAvailable: boolean;

  constructor( id: number, title: string, author: string) {
    this.id = id;
    this.title = title;
    this.author = author;
    this.isAvailable = true;
  }

  borrow(): void {
    if (this.isAvailable) {
      this.isAvailable = false;
      console.log(`${this.title} with ID ${this.id} has been borrowed.`);
    } else {
      console.log(`${this.title} with ID ${this.id} is unavailable.`);
    }
  }

  returnBook(): void {
    this.isAvailable = true;
    console.log(`${this.title} with ID ${this.id} has been returned.`);
  }
}