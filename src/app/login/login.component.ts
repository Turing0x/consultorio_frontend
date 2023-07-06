import { Component } from '@angular/core';
import { LoginService } from './login.services';
import swal from 'sweetalert2';

import { Clinic } from 'src/data/clinic/clinic';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  clinic: Clinic = new Clinic()  
  whatSee: boolean = true;

  constructor(
    private loginService: LoginService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ){}

  public makeLogin(): void{
    this.loginService.signIn(this.clinic).subscribe(
      success => {

        if( !success ){
          swal.fire( 'Login error', 
            'The data provided is incorrect, please rectify it', 'error' )
          return
        }

        swal.fire( 'Action completed!', 
        `You have successfully logged in!`, 'success')
        this.router.navigate(['/dashboard'], 
          { relativeTo: this.activatedRoute })

      }
    )
  }

  public registerClinic(): void{
    this.loginService.registerClinic(this.clinic).subscribe(
      cli => {
        this.whatSee = !this.whatSee
        this.clinic = cli
        swal.fire(
          'Action completed!',
          `The clinic has been successfully registered!`,
          'success'
        )
      }
    )
  }

}
