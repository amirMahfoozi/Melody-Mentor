import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../dashboard/models/user';
import { Observable, map } from 'rxjs';
import { LoginResponse } from '../auth/interfaces/login-response';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class AuthenticationService {
  public httpOptions: Object = {
    headers: new Headers({
      'Content-Type': 'application/json'
    })
  }
  constructor(
    private http: HttpClient,
    private router: Router
  ) {

    this.currentUser = new User();
  }

  public currentUser: User;

  public logout(): void {

    this.currentUser = new User();

  }

  public login(username: string, password: string): Observable<LoginResponse> {

    let requestUrl: string =
      "";

    let requestData =
      { username: username, password: password };


    return this.http.post<LoginResponse>
      (requestUrl, requestData, this.httpOptions).pipe();

  }

  hasAuthenticate(): boolean {
    if (!this.currentUser) {
      this.router.navigateByUrl('/notauthorized');
      return false;
    }
    return true;
  }
}
