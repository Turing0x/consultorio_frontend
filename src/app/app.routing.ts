import { RouterModule, Routes } from "@angular/router";
import { SignInComponent } from "./auth/pages/sign-in/sign-in.component";
import { UserManagerComponent } from "./user-manager/user-manager.component";

const routes: Routes = [
  { path: '', component: SignInComponent }
]

export const routing = RouterModule.forRoot(routes);