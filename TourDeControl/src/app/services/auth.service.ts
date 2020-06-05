import { Platform, AlertController, LoadingController } from '@ionic/angular';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
//import { JwtHelperService } from '@auth0/angular-jwt';
import { Storage } from '@ionic/storage';
//import { environment } from '../../environments/environment';
import { tap, catchError, map } from 'rxjs/operators';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { environment } from 'src/Models/environements';
import { Data } from '@angular/router';
//import { jwtOptionsFactory } from '../app.module';
// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { Observable, of } from 'rxjs';
// import { catchError, tap } from 'rxjs/operators';

const TOKEN_KEY = 'access_token';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  apiUrl = environment.url;
  url = environment.url;
  user = null;
  authenticationState = new BehaviorSubject(false);

  constructor(private http: HttpClient,private storage: Storage) { }

  // checkToken() {
  //   this.storage.get(TOKEN_KEY).then(token => {
  //     if (token) {
  //       let decoded = this.helper.decodeToken(token);
  //       let isExpired = this.helper.isTokenExpired(token);
 
  //       if (!isExpired) {
  //         this.user = decoded;
  //         this.authenticationState.next(true);
  //       } else {
  //         this.storage.remove(TOKEN_KEY);
  //       }
  //     }
  //   });
  // }
  isAuthenticated() {
    return this.authenticationState.value;
  }

  login (data): Observable<any> {
    //this.authenticationState.next(true);
    console.log('in service')
    return this.http.post<any>(this.apiUrl + '/user/connexion', data)
    
      .pipe(
       tap(_ => this.authenticationState.next(true)),
        
        catchError(this.handleError('login', []))
      );
      
  }

  logout (): Observable<any> {
    return this.http.get<any>(this.apiUrl + 'signout')
      .pipe(
        tap(_ => this.log('logout')),
        catchError(this.handleError('logout', []))
      );
  }

  register (data): Observable<any> {
    return this.http.post<any>(this.apiUrl + '/user/creer_compte', data)
      .pipe(
        tap(_ => this.log('login')),
        catchError(this.handleError('login', []))
      );
  }

  AfficherQues(): Observable<any>
  {
    
    return this.http.get<any>(this.apiUrl + '/questionnaires')
    .pipe(
      tap(_ => console.log('ok')),
      catchError(this.handleError('logout', []))
    );
    

  }
  AfficherQues_from_Questionnaireid(id)
  {
    let link = environment.url+ '/questionnaire/'+id;
   return this.http.get(link).pipe(map((data:any)=>data));
    

  }

  Send_Quiz (data,id): Observable<any> {
    return this.http.post<any>(this.apiUrl + '/reponse/'+id, data)
      .pipe(
        tap(_ => this.log('OK')),
        catchError(this.handleError('login', []))
      );
  }
  

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    console.log(message);
  }
}