import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Operation } from '../models/operation';

@Injectable({
  providedIn: 'root',
})
export class OperationService {
  apiUrl = 'http://localhost:8080/operations/';

  constructor(private httpClient: HttpClient) {}

  getOperationsByCodeCompte(codeCompte: string, page: number, size: number) {
    const options = {
      params: new HttpParams().set('page', page).set('size', size),
    };
    return this.httpClient.get<any>(this.apiUrl + codeCompte, options);
  }

  effectuerOperation(data: any, type: string) {
    return this.httpClient.post<void>(this.apiUrl + type, data);
  }
}
