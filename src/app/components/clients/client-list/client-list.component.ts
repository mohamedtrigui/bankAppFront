import { Component, OnInit } from '@angular/core';
import { Client } from '../../../models/client';
import { ClientService } from '../../../services/client-service';

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.css'],
})
export class ClientListComponent implements OnInit {
  client!: Client;
  clients!: Client[];

  constructor(private cs: ClientService) {}

  ngOnInit() {
    this.fetchClients();
  }

  fetchClients() {
    this.cs.fetchClient().subscribe((data) => {
      this.clients = data;
    });
  }
}
