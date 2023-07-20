import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { 
    path: 'auth',
    loadChildren: () => 
      import('./auth/auth.module')
        .then( m => m.AuthModule )
  },
  { 
    path: 'person',
    loadChildren: () => 
      import('./user-manager/person.module')
        .then( m => m.PersonModule )
  },
  {
    path: '**', redirectTo: 'auth'
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
