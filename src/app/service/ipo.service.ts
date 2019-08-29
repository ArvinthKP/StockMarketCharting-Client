import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IPO } from '../models/ipo';

@Injectable({
  providedIn: 'root'
})
export class IpoService {

  baseUrl = 'http://localhost:8082/api';

  constructor(private http: HttpClient) { }

  getIpos(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/ipos`);
  }

  addIpo(ipo: IPO): Observable<any> {
    return this.http.post(`${this.baseUrl}/ipo/create`, ipo);
  }

  updateIpo(ipo: IPO): Observable<any> {
    return this.http.post(`${this.baseUrl}/ipo/create`, ipo);
  }

  getIpoById(ipoId: number): Observable<IPO> {
    return this.http.get<IPO>(`${this.baseUrl}/ipo/${ipoId}`);
  }
  
}
