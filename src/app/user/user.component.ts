import { Component, OnInit } from '@angular/core';
import { ControlSessionService } from '../session/control-session.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit {
  userLogged = false;
  touchTimeout!: number;

  constructor(private service: ControlSessionService, private router: Router) {}
  ngOnInit(): void {
    this.routerOnActivate();
  }

  routerOnActivate() {
    this.touchTimeout = window.setInterval(() => {
      this.userLogged = this.service.UserLogged();
    }, 1000);
  }

  LogOutUser() {
    sessionStorage.setItem('user_id', 'false');
    sessionStorage.setItem('user_name', 'false');
    sessionStorage.setItem('user_logged', 'false');
    this.router.navigate(['/']);
  }
}
