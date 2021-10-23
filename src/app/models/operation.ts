import { Compte } from './compte';

export interface Operation {
  id: string;
  dateOperation: Date;
  montant: number;
  typeOp: string;
  compte: Compte;
}
