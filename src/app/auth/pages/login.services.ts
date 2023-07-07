import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

import { Clinic } from 'src/data/clinic/clinic';

@Injectable()
export class LoginService{

  private url: string = 'http://localhost:8080/api/clinics'
  private httpHeaders = new HttpHeaders({
    'Content-Type': 'application/json'
  })

  constructor(
    public http: HttpClient
  ){ }

  registerClinic( clinic: Clinic ): Observable<Clinic>{
    return this.http.post<Clinic>(this.url, clinic, {
      headers: this.httpHeaders }).pipe(
        catchError(e => {
          Swal.fire(
            'Registration error',
            'An error has occurred when registering the new clinic, please check the data entered',
            'error'
          )
          return throwError(() => e)
        })
      );
  }

  signIn( clinic: Clinic ): Observable<boolean>{
    return this.http.post<boolean>(`${this.url}/login`, clinic, {
      headers: this.httpHeaders }).pipe(
        catchError(e => {
          Swal.fire(
            'Login error',
            'The data provided is incorrect, please rectify it',
            'error'
          )
          return throwError(() => e)
        })
      );
  }

}