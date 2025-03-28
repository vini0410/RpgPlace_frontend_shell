import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ControlSessionService {
  constructor() {}

  UserLogged() {
    const response = sessionStorage.getItem('user_logged');
    // console.log(response)
    return response === 'true' ? true : false;
  }

  UserId() {
    return sessionStorage.getItem('user_id');
  }
}
