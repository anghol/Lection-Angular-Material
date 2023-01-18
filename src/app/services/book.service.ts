import { Injectable } from '@angular/core';
import { IBook } from '../interfaces/book';
import { count, Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { AuthService } from '../auth/auth.service';
import { IBookRequest } from '../interfaces/book-request';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  // private _currentId: number = 1;

  // private _books: IBook[] = [
  //   {
  //     id: 1,
  //     name: 'Дюна',
  //     author: {
  //       firstName: 'Фрэнк',
  //       lastName: 'Герберт'
  //     }
  //   }
  // ];

  constructor(
    private httpClient: HttpClient 
  ) { }

  public getBooks(): Observable<IBook[]> {
    return this.httpClient.get<IBook[]>(environment.apiUrl + 'books');
  }

  public getBook(id: string): Observable<IBook> {
    return this.httpClient.get<IBook>(environment.apiUrl + 'books/' + id);
  }

  public generateBooks(count: number): Observable<any> {
    return this.httpClient.post(environment.apiUrl + 'books/generate/' + count, {});
  }

  public deleteBooks(): Observable<any> {
    return this.httpClient.delete(environment.apiUrl + 'books');
  }

  public deleteBook(id: string): Observable<any> {
    return this.httpClient.delete(environment.apiUrl + 'books/' + id);
  }

  public createBook(book: IBookRequest): Observable<IBook> {
    return this.httpClient.post<IBook>(environment.apiUrl + 'books',
      JSON.stringify(book));
  }

  public updateBook(id: string, newBook: IBookRequest): Observable<IBook> {
    return this.httpClient.put<IBook>(environment.apiUrl + 'books/' + id,
      JSON.stringify(newBook));
  }

  // public getList(): Observable<IBook[]> {
  //   return of(this._books);
  // }

  // public addBook(book: IBook): Observable<any> {
  //   this._currentId++;
  //   book.id = this._currentId;
  //   this._books.push(book);
  //   return of();
  // }

  // public editBook(book: IBook): Observable<any> {
  //   const index = this._books.findIndex(b => b.id == book.id);
  //   if (index != -1) {
  //     this._books[index] = book;
  //   }
  //   return of();
  // }
}
