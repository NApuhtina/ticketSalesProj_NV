import { Component, OnInit } from '@angular/core';
import {MessageService} from "primeng/api";
import {IUser} from 'src/app/models/IUser';
import {AuthService} from 'src/app/services/auth/auth.service'

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
  saveUserToLocalStorage: boolean;

  constructor(private messageService: MessageService,
              private authService: AuthService) {}
  ngOnInit(): void {
  }

  registration(e:Event): void | boolean {
    if (this.psw !== this.pswRepeat) {
      this.messageService.add({
        severity: 'error',
        summary: 'Пароли не совпадают',
      });
      return false;
    }
    const user: IUser = {
      psw: this.psw,
      cardNumber: this.cardNumber,
      login: this.login,
      email: this.email,
    }

    if (!this.authService.isUserExists(user)) {
      const registrResult: boolean = this.authService.setUser(user, this.saveUserToLocalStorage);

      if(registrResult && this.saveUserToLocalStorage) {
        this.messageService.add({
          severity: 'success',
          summary: 'Вы зарегистрированы',
          detail: 'Пользователь успешно добавлен в локальное хранилище браузера'
        });
      } else if (registrResult && !this.saveUserToLocalStorage) {
        this.messageService.add({
          severity: 'success',
          summary: 'Вы зарегистрированы',
          detail: 'Пользователь успешно добавлен в хранилище пользователей'
        });
      }
    } else {
      this.messageService.add({
        severity: 'warn',
        summary: 'Пользователь уже существует',
        detail: 'Пользователь с таким логином уже зарегистрирован',
      });
    }
  }
}
