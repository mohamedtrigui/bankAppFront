import { Component, OnInit } from '@angular/core';
import { Compte } from 'src/app/models/compte';
import { CompteService } from 'src/app/services/compte.service';

@Component({
  selector: 'app-compte-list',
  templateUrl: './compte-list.component.html',
  styleUrls: ['./compte-list.component.css'],
})
export class CompteListComponent implements OnInit {
  comptes!: Compte[];

  constructor(private cs: CompteService) {
    this.fetchComptes();
  }

  ngOnInit(): void {}

  fetchComptes() {
    this.cs.fetchComptes().subscribe((data) => {
      this.comptes = data;
    });
  }
}
