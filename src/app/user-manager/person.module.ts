import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { DetailsEditFormComponent } from './details-edit-form/details-edit-form.component';
import { AddPersonFormComponent } from './add-person-form/add-person-form.component';
import { PersonControlRoutingModule } from './person-routing.module';
import { UserManagerComponent } from './user-manager/user-manager.component';

@NgModule({
  declarations: [
    AddPersonFormComponent,
    DetailsEditFormComponent,
    UserManagerComponent
  ],
  imports: [
    CommonModule,
    PersonControlRoutingModule,
    FormsModule,
    RouterModule
  ]
})
export class PersonModule { }
