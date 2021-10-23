import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Compte } from 'src/app/models/compte';
import { Operation } from 'src/app/models/operation';
import { CompteService } from 'src/app/services/compte.service';
import { OperationService } from 'src/app/services/operation.service';

@Component({
  selector: 'app-home-cards',
  templateUrl: './home-cards.component.html',
  styleUrls: ['./home-cards.component.css'],
})
export class HomeCardsComponent implements OnInit {
  codeCompte: string = '';

  //for the form card
  form: FormGroup;

  // for the infos card
  compte!: Compte;

  // for the list operations card
  operations!: Operation[];
  nbrPages!: number;

  constructor(
    private cs: CompteService,
    private os: OperationService,
    private fb: FormBuilder
  ) {
    let formControls = {
      operation: new FormControl('', [Validators.required]),
      vers: new FormControl('', []),
      montant: new FormControl('', []),
    };
    this.form = this.fb.group(formControls);
  }

  ngOnInit(): void {}

  getCompteByCodeCompte() {
    this.cs
      .getCompteByCodeCompte(this.codeCompte)
      .subscribe((data) => (this.compte = data));
    this.getOperationsByCodeCompte(0);
    //I passed 0 to get the first page
  }

  getOperationsByCodeCompte(page: number) {
    this.os
      .getOperationsByCodeCompte(this.codeCompte, page, 5)
      .subscribe((data) => {
        this.operations = data.listOp;
        this.nbrPages = data.nbrPages;
      });
  }

  onSubmit() {
    //read the type of the operation
    let type = this.form.value.operation;

    //build an object that the backend can understand
    let data = {
      codeCompte: this.codeCompte,
      montant: this.form.value.montant,
    } as any;
    //in the case of virement we have to the other compte
    if (type == 'virement') {
      data.codeCompteTwo = this.form.value.vers;
    }

    //callthe service method to send the data, then refresh the list of operations and the infos client
    this.os.effectuerOperation(data, type).subscribe(() => {
      this.getCompteByCodeCompte();
    });
  }
}
