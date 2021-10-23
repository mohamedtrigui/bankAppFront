import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Client } from '../models/client';

@Injectable({
  providedIn: 'root',
})
export class ClientService {
  apiUrl = 'http://localhost:8080/clients/';

  constructor(private httpClient: HttpClient) {}

  fetchClient() {
    return this.httpClient.get<Client[]>(this.apiUrl);
  }
}
