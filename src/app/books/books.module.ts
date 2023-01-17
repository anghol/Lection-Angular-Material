import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BooksRoutingModule } from './books-routing.module';
import { BooksComponent } from './books.component';
import { PipesModule } from '../pipes/pipes.module';

import { MatButtonModule } from '@angular/material/button';
import { AddBookDialogComponent } from './dialog/add-book-dialog/add-book-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';

@NgModule({
  declarations: [
    BooksComponent,
    AddBookDialogComponent
  ],
  imports: [
    CommonModule,
    BooksRoutingModule,
    PipesModule,
    MatButtonModule,
    MatListModule,
    MatIconModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class BooksModule { }
