import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {VotingModule} from "./modules/voting/voting.module";
import {AuthenticationModule} from "./modules/authentication/authentication.module";
import {HistoryModule} from "./modules/history/history.module";
import {MenuComponent} from "./menu/menu.component";


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthenticationModule,
    VotingModule,
    HistoryModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
