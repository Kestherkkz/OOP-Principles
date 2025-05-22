// Task

export class Task {
    public id : number; 
    public description : string;
    public isCompleted : boolean = false

  constructor( id : number,  description: string ) {
    this.id = id,
    this.description = description,
    this.isCompleted =  false
  }

  complete(): void {
    this.isCompleted = true;
    console.log(`Task "${this.description}" has been completed.`);
  }

  updateDescription(newDescription: string): void {
    this.description = newDescription;
    console.log(`Task Description has been updated to: "${this.description}"`);
  }
}