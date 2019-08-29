import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StockPrice } from '../models/stockPrice';

@Injectable({
  providedIn: 'root'
})
export class StockPriceService {

  baseUrl = 'http://localhost:8082/api';

  constructor(private http: HttpClient) { }

  getStockPrices(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/stockPrices`);
  }

  addStockPrice(stockPrice: StockPrice): Observable<any> {
    return this.http.post(`${this.baseUrl}/stockPrice/create`, stockPrice);
  }

  updateStockPrice(stockPrice: StockPrice): Observable<any> {
    return this.http.post(`${this.baseUrl}/stockPrice/create`, stockPrice);
  }

  getStockPriceById(stockPriceId: StockPrice): Observable<StockPrice> {
    return this.http.get<StockPrice>(`${this.baseUrl}/stockPrice/${stockPriceId}`);
  }

  getStockPricesByCompanyId(companyId): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/stockPrices/${companyId}`);
  }

  getStockPricesCompare1(companyId, stockExchangeId, periodicity): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/stockPrices/${companyId}/${stockExchangeId}/${periodicity}`);
  }

}
