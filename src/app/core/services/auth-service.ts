import {Injectable} from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  /**
   * se le pone un $ por que es una convencion para que se sepa que es un observable este tipito
   */
  autenticated$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  /**
   * este tipo tiene el valor de que cuando se autentica dice oye puedo ver
   * para que el se subscriba despues spea qe puede ver el contenido,
   * esto se utiliza mayormente un servicio aparte para setear los valore y saber si el hombre esta autenticado y
   * demás
   * @param visible booleano para saber si me he autenticado o no
   */
  setValue(visible: boolean): void {
    this.autenticated$.next(visible);
  }
}
