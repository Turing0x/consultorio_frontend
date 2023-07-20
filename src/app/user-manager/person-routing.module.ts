import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AddPersonFormComponent } from './add-person-form/add-person-form.component';
import { DetailsEditFormComponent } from './details-edit-form/details-edit-form.component';
import { UserManagerComponent } from './user-manager/user-manager.component';

const routes: Routes = [
  { 
    path: '' ,
    children: [
      { path: 'listcomplete', component: UserManagerComponent },
      { path: 'create', component: AddPersonFormComponent },
      { path: 'details/:ci', component: DetailsEditFormComponent },
      { path: '**', redirectTo: 'listcomplete' },
    ]
  }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ]
})
export class PersonControlRoutingModule { }
