import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { HelpComponentComponent } from './dashboard/pages/help-component/help-component.component';
import { MedicalStaffComponent } from './dashboard/pages/medical-staff/medical-staff.component';
import { TownHousesComponent } from './dashboard/pages/town-houses/town-houses.component';
import { NavigationComponent } from './body-site/navigation/navigation.component';
import { SettingsComponent } from './dashboard/pages/settings/settings.component';
import { LoginService } from './auth/pages/login.services';
import { AppRoutingModule } from './app-routing.module';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { BodySiteComponent } from './body-site/body-site.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    NavigationComponent,
    MedicalStaffComponent,
    TownHousesComponent,
    SettingsComponent,
    HelpComponentComponent,
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
