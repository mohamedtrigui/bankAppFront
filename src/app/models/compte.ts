import { Client } from './client';
import { Operation } from './operation';

export interface Compte {
  id: string;
  codeCompte: string;
  dateCreation: Date;
  solde: number;
  client: Client;
  operations: Operation[];
}
