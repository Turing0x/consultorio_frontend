import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../../core/services/auth-service";
import {BehaviorSubject} from "rxjs";

@Component({
  selector: 'navigation-side-bar',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  autenticated$!: BehaviorSubject<boolean>;

  constructor(private authService: AuthService) {
  }

  ngOnInit(): void {
    this.checkAuth();
  }

  /**
   * Verifica si esta autenticado para poder ver las demas acciones ,pues supongo que sino estas
   * logeadono puedas ver toti mundele
   * @private
   */
  private checkAuth(): void {
    this.autenticated$ = this.authService.autenticated$;
  }
}
