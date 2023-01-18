import { Component, OnInit } from '@angular/core';
import { BookService } from '../services/book.service';
import {MatDialog } from '@angular/material/dialog';
import { AddBookDialogComponent } from './dialog/add-book-dialog/add-book-dialog.component';
import { IBook } from '../interfaces/book';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit {

  public books: IBook[] = []

  constructor(
    public bookService: BookService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.loadBooks();
  }

  public addBooks(): void {
    this.bookService.generateBooks(10).subscribe(_ => {
      this.loadBooks();
    });
  }

  public deleteBooks(): void {
    this.bookService.deleteBooks().subscribe(_ => {
      this.loadBooks();
    });
  }

  private loadBooks(): void {
    this.bookService.getBooks().subscribe(result => {
      this.books = result;
    });
  }

  public getBook(id: string): void {
    this.bookService.getBook(id).subscribe(result => {
      console.log(result.id);
      console.log(result.author);
      console.log(result.name);
    })
  }

  public createBook() {
    const dialogRef = this.dialog.open(AddBookDialogComponent, {
      data: undefined,
    });

    dialogRef.afterClosed().subscribe(result => {  
      if (result) {
        this.bookService.createBook(result).subscribe(_ => {
          this.loadBooks();
        });
      }
    });
  }

  public editBook(book: IBook) {
    const dialogRef = this.dialog.open(AddBookDialogComponent, {
      data: {author: book.author, name: book.name}
    });

    dialogRef.afterClosed().subscribe(result => {  
      if (result) {
        this.bookService.updateBook(book.id, result).subscribe(_ => {
          this.loadBooks();
        });
      }
    });
  }

  public deleteBook(book: IBook) {
    this.bookService.deleteBook(book.id).subscribe(_ => {
      this.loadBooks();
    })
  }
}
