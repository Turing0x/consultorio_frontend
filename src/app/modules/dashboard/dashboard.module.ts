import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {DashboardRoutingModule} from './dashboard-routing.module';
import {DashboardComponent} from "./dashboard.component";
import {MedicalStaffComponent} from "./pages/medical-staff/medical-staff.component";
import {HelpComponentComponent} from "./pages/help-component/help-component.component";
import {TownHousesComponent} from "./pages/town-houses/town-houses.component";
import {SettingsComponent} from "./pages/settings/settings.component";

@NgModule({
  declarations: [DashboardComponent, MedicalStaffComponent, HelpComponentComponent, TownHousesComponent, SettingsComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule {
}
