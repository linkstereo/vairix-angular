import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Character} from "../dto/character";
import {RequestInfo} from "../dto/requestinfo";
import {Observable, Observer, Subscriber, take} from "rxjs";
import {Token} from "../dto/token";

@Injectable({
    providedIn: 'root'
})
export class RestApiClientService {

    baseURL = "http://localhost:8080/v1";
    token: any;

    constructor(private httpClient: HttpClient) {
    }

    checkAndUpdateToken(){
        if (!localStorage.getItem("auth-token")) {
            this.authenticate().subscribe( (token) => {
                localStorage.setItem("auth-token", token.accessToken);
            });
        }

        //while (!localStorage.getItem("auth-token")) {}
    }

    getRequestsInfo() {
        this.checkAndUpdateToken();
        return this.httpClient.get<RequestInfo[]>(
            this.baseURL + '/requests',
            {headers: new HttpHeaders({
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + localStorage.getItem("auth-token")
                })})
    }

    getCharacters(): Observable<Character[]> {
        this.checkAndUpdateToken();
        return this.httpClient.get<Character[]>(
            this.baseURL + '/characters',
        {headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem("auth-token")
            })})

    }

    getCharacter(id: any): Observable<Character> {
        this.checkAndUpdateToken();
        return this.httpClient.get<Character>(
            this.baseURL + '/characters/' + id,
            {headers: new HttpHeaders({
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + localStorage.getItem("auth-token")
                })})

    }

    register() {
           return this.httpClient.post<Token>(
                this.baseURL + '/jwt/register',
                '{' +
                '    "email": "link@mail.com",' +
                '    "password": "13564"' +
                '}',
                {headers: new HttpHeaders({'Content-Type': 'application/json'})}
            );
    }

    authenticate() {
        return this.httpClient.post<Token>(
            this.baseURL + '/jwt/authenticate',
            '{' +
            '    "email": "link@mail.com",' +
            '    "password": "13564"' +
            '}',
            {headers: new HttpHeaders({'Content-Type': 'application/json'})}
        );
    }


}
