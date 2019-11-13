import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { nba } from './nba.api';
import { Observable, of } from 'rxjs';

/**
 * Nba Service handles retrieving data from data.nba.net
 */

@Injectable({
  providedIn: 'root'
})
export class NbaService {
  constructor(private http: HttpClient) { }

  /**
   * Retrieves and returns the specified teams details
   * @param tricode Tricode name for the team e.g 'BKL' or 'GSW'
   */
  getTeam(tricode: string): Observable<nba.Team> {
    return of(nba.TEAMS[tricode]);
  }
}
