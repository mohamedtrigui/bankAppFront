import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Compte } from '../models/compte';

@Injectable({
  providedIn: 'root',
})
export class CompteService {
  apiUrl = 'http://localhost:8080/comptes/';

  constructor(private httpClient: HttpClient) {}

  fetchComptes() {
    return this.httpClient.get<Compte[]>(this.apiUrl);
  }

  getCompteByCodeCompte(code: string) {
    return this.httpClient.get<Compte>(this.apiUrl + 'code/' + code);
  }
}
