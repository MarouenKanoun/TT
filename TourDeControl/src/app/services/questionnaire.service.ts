import { Injectable } from '@angular/core';
import { Questionnaire } from 'src/app/choix-questionnaire/Questionnaire';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { environment } from 'src/Models/environements';

@Injectable({
  providedIn: 'root'
})
export class QuestionnaireService {

  apiUrl = environment.url;

  constructor(private http: HttpClient) { }

  getQuestionnaires (): Observable<Questionnaire[]> 
  {
    return this.http.get<Questionnaire[]>(this.apiUrl + '/questionnaires')
      .pipe(
        tap(_ => this.log('fetched Questionnaires')),
        catchError(this.handleError('getQuestionnaires', []))
      );
  }

  getQuestion()
  {
    return this.http.get(this.apiUrl + '/questionnaire/5eb91b94a698ee2d54a2e147')
      .pipe(
        tap(_ => this.log('fetched Questionnaires')),
        catchError(this.handleError('getQuestionnaires', []))
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
