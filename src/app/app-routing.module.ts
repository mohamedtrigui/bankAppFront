import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientListComponent } from './components/clients/client-list/client-list.component';
import { CompteListComponent } from './components/comptes/compte-list/compte-list.component';
import { HomeCardsComponent } from './components/home/home-cards/home-cards.component';

const routes: Routes = [
  { path: 'clients', component: ClientListComponent },
  { path: 'comptes', component: CompteListComponent },
  { path: '', component: HomeCardsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
