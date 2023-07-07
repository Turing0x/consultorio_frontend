import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { NavigationComponent } from './shared/body-site/navigation/navigation.component';
import { AppRoutingModule } from './app-routing.module';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { BodySiteComponent } from './shared/body-site/body-site.component';
import {LoginService} from "./modules/auth/services/login.services";

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    BodySiteComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
