import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import * as Models from '../models/login';
import * as Interfaces from '../interfaces/login';
import { LoginResponse } from '../interfaces/login-response';


const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' },)
};

@Injectable({
    providedIn: 'root',
})

export class LoginService {

    public constructor() {
    }

    public tokenType = 'Bearer ';

    public tokenResponse?: LoginResponse;

    public getToken(login: Interfaces.Login): string {

        let data = { username: login.username, password: login.password };
        let url = `/authenticate`;

        // return this.http.post<LoginResponse>(url, data, httpOptions).pipe();
        if (login.username == 'admin' && login.password == 'password') {
            return "ok";
        }
        return "false";

    }

}