import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StockExchange } from '../models/stockExchange';

@Injectable({
  providedIn: 'root'
})
export class StockExchangeService {

  baseUrl = 'http://localhost:8082/api';

  constructor(private http: HttpClient) { }

  getStockExhanges(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/stockExchanges`);
  }

  addStockExhange(stockExhange: StockExchange): Observable<any> {
    return this.http.post(`${this.baseUrl}/stockExchange/create`, stockExhange);
  }

  updateStockExhange(stockExhange: StockExchange): Observable<any> {
    return this.http.post(`${this.baseUrl}/stockExhange/create`, stockExhange);
  }

  getStockExhangeById(stockExhangeId: StockExchange): Observable<StockExchange> {
    return this.http.get<StockExchange>(`${this.baseUrl}/stockExhange/${stockExhangeId}`);
  }
}
