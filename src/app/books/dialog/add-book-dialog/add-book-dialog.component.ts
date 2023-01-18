import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IBook } from 'src/app/interfaces/book';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { IBookRequest } from 'src/app/interfaces/book-request';

@Component({
  selector: 'app-add-book-dialog',
  templateUrl: './add-book-dialog.component.html',
  styleUrls: ['./add-book-dialog.component.scss']
})
export class AddBookDialogComponent implements OnInit {
  public action: string = 'Добавить';

  public bookForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    author: new FormControl('', [Validators.required])
    // author: new FormGroup({
    //   firstName: new FormControl('', [Validators.required]),
    //   lastName: new FormControl('', Validators.required)
    // })
  })

  public get name(): FormControl {
    return this.bookForm.get('name') as FormControl;
  }

  public get author(): FormControl {
    return this.bookForm.get('author') as FormControl;
    // return this.bookForm.get('author') as FormGroup;
  }

//   public get firstName(): FormControl {
//     return this.author.get('firstName') as FormControl;
//   }

//   public get lastName(): FormControl {
//     return this.author.get('lastName') as FormControl;
//   }

  constructor(
    // ссылка на диалог, который у нас получится
    public dialogRef: MatDialogRef<AddBookDialogComponent>,

    // прокидывается конкретное нужное значение
    @Inject(MAT_DIALOG_DATA) public data?: IBookRequest,
  ) {}

  public ngOnInit() {
    if(this.data) {
      this.name.setValue(this.data.name);
      this.author.setValue(this.data.author);
    //   this.firstName.setValue(this.data.author.firstName);
    //   this.lastName.setValue(this.data.author.lastName);
      this.action = 'Изменить';
    }
  }

  public onCancelClick() {
    this.dialogRef.close();
  }

  public onAddClick() {
    if (this.bookForm.invalid) return;

    let newBook = {
        author: this.author.value,
        name: this.name.value
    } as IBookRequest
    
    // let book = {
    //   id: this.data?.id,
    //   name: this.name.value,
    //   author: {
    //     firstName: this.firstName.value,
    //     lastName: this.lastName.value
    //   }
    // } as IBook;

    this.dialogRef.close(newBook);
  }
}
