import {ActivatedRoute, Router} from '@angular/router';
import {Component} from '@angular/core';

import {LoginService} from '../../services/login.services';
import {Clinic} from 'src/app/modules/auth/models/class/clinic/clinic';
import swal from 'sweetalert2';
import {AuthService} from "../../../../core/services/auth-service";

@Component({
  selector: 'sign-in-page',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent {

  clinic: Clinic = new Clinic()

  constructor(
    private loginService: LoginService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private authService: AuthService
  ) {
  }

  navigateTo(route: string) {
    this.router.navigate([route]);
  }

  public makeLogin(): void {
    this.loginService.signIn(this.clinic).subscribe({
        next: success => {

          if (!success) {
            swal.fire('Login error',
              'The data provided is incorrect, please rectify it', 'error')
            return
          }

          this.authService.autenticated$.next(true);
          swal.fire('Action completed!',
            `You have successfully logged in!`, 'success')
          this.router.navigate(['/dashboard'],
            {relativeTo: this.activatedRoute})

        },
        error: () => this.authService.autenticated$.next(false)
      }
    )
  }
}
