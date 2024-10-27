import { Component, OnInit } from '@angular/core';
import {MessageService} from "primeng/api";
import {IUser} from "../../../models/users";
import {AuthService} from "../../../services/auth/auth.service";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
  providers:[MessageService]
})

export class RegistrationComponent implements OnInit {
  login: string;
  psw: string;
  pswRepeat: string;
  email: string;
  cardNumber: string;

  saveUserToLocalStorage: boolean = false;
  constructor(private messageService: MessageService,
              private authService: AuthService) {
  }

  ngOnInit(): void {
  }

  registration(ev:Event): void | boolean {
    ev.preventDefault();
    if (this.psw !== this.pswRepeat) {
      this.messageService.add({severity: 'error', summary: 'Пароли не совпадают'});
      return false;
    }
    const userObj: IUser = {
      psw: this.psw,
      cardNumber: this.cardNumber,
      login: this.login,
      email: this.email
    }

    if (!this.authService.isUserExists(userObj)) {
      this.authService.setUser(userObj);
      this.messageService.add({severity: 'success', summary: 'Регистрация прошла успешно'});
    } else {
      this.messageService.add({severity: 'warn', summary: 'Пользователь уже зарегистрирован'});
    }
    if (this.saveUserToLocalStorage) {
      const userJson = JSON.stringify(userObj);
      window.localStorage.setItem('currentUser', userJson);
      } else {
  this.messageService.add({severity: 'warn', summary: 'Пользователь уже зарегистрирован'});
    }

  }

  //addSingle() {
    //this.messageService.add({severity:'success', summary:'Service Message', detail:'Via MessageService'});
 // }
}

