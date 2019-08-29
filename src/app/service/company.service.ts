import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Company } from '../models/company';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  baseUrl = 'http://localhost:8082/api';
  
  constructor(private http: HttpClient) { }

  getCompanies(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/companies`);
  }

  addCompany(company: Company): Observable<any> {
    return this.http.post(`${this.baseUrl}/company/create`, company);
  }

  updateCompany(company: Company): Observable<any> {
    return this.http.post(`${this.baseUrl}/company/create`, company);
  }

  getCompanyById(companyId: number): Observable<Company> {
    return this.http.get<Company>(`${this.baseUrl}/company/${companyId}`);
  }

  getCompaniesBySectorName(sectorName: String): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/companies/${sectorName}`);
  }
}
