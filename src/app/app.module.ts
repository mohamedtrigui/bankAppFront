import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { Router } from '@angular/router';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { ClientListComponent } from './components/clients/client-list/client-list.component';
import { HttpClientModule } from '@angular/common/http';
import { ClientService } from './services/client-service';
import { NavBarComponent } from './components/layout/nav-bar/nav-bar.component';
import { CompteListComponent } from './components/comptes/compte-list/compte-list.component';
import { HomeCardsComponent } from './components/home/home-cards/home-cards.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PipeTypeOpPipe } from './components/home/pipe-type-op.pipe';
import { PipeNumToArrayPipe } from './components/home/pipe-num-to-array.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ClientListComponent,
    NavBarComponent,
    CompteListComponent,
    HomeCardsComponent,
    PipeTypeOpPipe,
    PipeNumToArrayPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    NgbTooltipModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [ClientService],
  bootstrap: [AppComponent],
})
export class AppModule {}
