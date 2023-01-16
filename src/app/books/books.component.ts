import { Component } from '@angular/core';
import { BookService } from '../services/book.service';
import {MatDialog } from '@angular/material/dialog';
import { AddBookDialogComponent } from './dialog/add-book-dialog/add-book-dialog.component';
import { IBook } from '../interfaces/book';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent {

  constructor(
    public bookService: BookService,
    private dialog: MatDialog
  ) {}

  public addBook() {
    const dialogRef = this.dialog.open(AddBookDialogComponent, {
      data: undefined,
    });

    dialogRef.afterClosed().subscribe(result => {  
      if (result) {
        this.bookService.addBook(result).subscribe();
      }
    });
  }

  public editBook(book: IBook) {
    const dialogRef = this.dialog.open(AddBookDialogComponent, {
      data: book,
    });

    dialogRef.afterClosed().subscribe(result => {  
      if (result) {
        this.bookService.editBook(result).subscribe();
      }
    });
  }
}
