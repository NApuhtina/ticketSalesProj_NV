import { NgModule } from '@angular/core';
import {ButtonModule} from 'primeng/button';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {AppRoutingModule} from "./app-routing.module";
import {AuthService} from "./services/auth/auth.service";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MessagesModule} from 'primeng/messages';

@NgModule({
  declarations: [
    AppComponent
  ],

  imports: [
    BrowserModule,
    ButtonModule,
    BrowserAnimationsModule,
    MessagesModule,
    AppRoutingModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})

export class AppModule { }
