import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { LoginModel } from './models/login.model';
import {catchError, map, Observable, of, tap} from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ILoginResponse } from '../interfaces/login-response';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _accessToken: string | null = null;
  // private _isAuthorized: boolean = false;

  public get accessToken(): string | null {
    return this._accessToken;
  }

  public get isAuthorized(): boolean {
    return !!this._accessToken;
    // return this._isAuthorized;
  }

  // public set isAuthorized(value: boolean) {
  //   this._isAuthorized = value;
  //   this.router.navigate([this.isAuthorized ? 'page-1' : 'auth/login']);
  // }

  constructor(
    private router: Router,
    private httpClient: HttpClient
  ) { }

  public login(model: LoginModel): Observable<ILoginResponse> {
    let headers = new HttpHeaders({['Content-Type']: 'application/json'});

    return this.httpClient.post<ILoginResponse>(environment.apiUrl + 'auth/login', JSON.stringify(model), {
      headers: headers
    })
      .pipe(
        tap(result => {
          this._accessToken = result.accessToken;
        },
        _ => {
          this._accessToken = null;
        })
      );

    // let result = false;
    // if (model.email == 'test@email' && model.password == 'testpass') {
    //   result = true;
    // }
    // this.isAuthorized = result;
    // return of(result);
  }

  public logout(): void {
    this._accessToken = null;
    this.router.navigate(['auth/login']);
    // this.isAuthorized = false;
  }
}
