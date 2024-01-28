import { RegisterRequestInterface } from './../types/register.interface';
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http"
import { Observable, map } from 'rxjs';
import { CurrentUserInterface } from 'src/app/shared/types/currentUser.interface';
import { AuthResponseInterface } from '../types/authResponse.interface';
import { environment } from 'src/environments/environment.development';

@Injectable({
    providedIn: 'root',
})


export class AuthService {
    constructor(private http: HttpClient) {}

    register(data: RegisterRequestInterface): Observable<CurrentUserInterface> {
        const url = environment.apiUrl + '/users'

        return this.http
            .post<AuthResponseInterface>(url, data)
            .pipe(map((response) => response.user))
    }
}