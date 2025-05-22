// Library Management System

import { Book } from "./book";
import { Member } from "./members";
import { Library } from "./library";

const book1 = new Book(1,"Hatchdev OOP Principles", "Mr Kelvin");
const book2 = new Book(2, "Typescript", " Mr Kelvin");
const kesther = new Member( 1, "Kesther");

kesther.borrowBook(book1);
kesther.returnBook(book1);

const library1 = new Library("Unilag Library");
library1.registerMember("John");
library1.addBook("Hackathon", "Mr Kelvin");
library1.addBook("Javascript", "Mr Kelvin");
console.log("All members:", library1.listMembers())
console.log("Available Books:", library1.listAvailableBooks());
library1.removeBook(book2, 2);

// Simple Task Manager

import { TaskManager } from "./taskManager";

const Kesther = new TaskManager();
Kesther.createTask("Wash clothes");
Kesther.createTask("Finish assignment");
Kesther.createTask("Attend Class");

const taskToUpdate = Kesther.findTaskById(2);
if (taskToUpdate) { taskToUpdate.updateDescription("Finish TypeScript assignment")};

const taskToComplete = Kesther.findTaskById(1);
if (taskToComplete) { taskToComplete.complete()}

console.log("All Tasks:", Kesther.getAllTasks());
console.log("Completed Tasks:", Kesther.getCompletedTasks());
console.log("Pending Tasks:", Kesther.getPendingTasks());