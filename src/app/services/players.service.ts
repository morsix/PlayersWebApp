import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { PaginationInfo } from '../models/paginationInfo.model';
import { PlayerPaginationWrapper } from '../interfaces/playerPaginationWrapper.interface';

@Injectable({
  providedIn: 'root'
})
export class PlayersService {

  private readonly API_URL = 'https://localhost:44316/api/';

  constructor(private http: HttpClient) {

  }

  getPlayers(paginationInfo: PaginationInfo): Observable<PlayerPaginationWrapper> {
    return this.http.post<PlayerPaginationWrapper>(this.API_URL + 'players', paginationInfo)
      .pipe(
        catchError(this.handleError)
      )
  }

  // Error handling 
  private handleError(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }
}
