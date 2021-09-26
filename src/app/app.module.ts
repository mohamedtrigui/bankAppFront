import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { SidebarComponent } from './sidebar/sidebar.component';

@NgModule({
  declarations: [	AppComponent,
      SidebarComponent
   ],
  imports: [BrowserModule, AppRoutingModule, NgbModule, NgbTooltipModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
