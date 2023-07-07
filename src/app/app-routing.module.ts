import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {BodySiteComponent} from "./shared/body-site/body-site.component";

const routes: Routes = [
  {
    path: '',
    component: BodySiteComponent,
    children: [
      {
        path: 'auth',
        loadChildren: () =>
          import('./modules/auth/auth.module')
            .then(m => m.AuthModule)
      },
      {
        path: 'dashboard',
        loadChildren: () =>
          import('./modules/dashboard/dashboard.module')
            .then(m => m.DashboardModule)
      },
      {
        path: '', pathMatch: "full", redirectTo: 'auth'
      }
    ]
  },

  //esto debjo se llama will cards si lo usas utilizalo para mandar a una pagina de not found o algo asi par que
  // la gente no escriba mierda en la ruta, que si te escribe cualquier cosa que no tienes ene l router definidio
  // te lo envie para esa pagina ejemplo
  // {
  //     path: '**', redirectTo: 'not-found'
  //  },
  // y entonces tengas una ruta not -found para ti
  // {
  //   path: '**', redirectTo: 'auth'
  // }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
