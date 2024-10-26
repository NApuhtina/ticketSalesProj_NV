import {Component, OnDestroy, OnInit} from '@angular/core';
import {AuthService} from "../../../services/auth/auth.service";
import {IUser} from "../../../models/users";
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-authorization',
  templateUrl: './authorization.component.html',
  styleUrls: ['./authorization.component.css'],
  providers: [MessageService]
})

export class AuthorizationComponent implements OnInit, OnDestroy {
  loginText='Логин';
  pswText='Пароль';
  psw:string;
  login:string;
  selectedValues: boolean;
  cardNumber: string;
  authTextButton: string;
  constructor(private authService:AuthService,
              private messageService: MessageService) { }

  ngOnInit(): void {
    this.authTextButton = "Авторизоваться";
  }
  ngOnDestroy() :void {
    console.log('onDes')
  }
  vipStatusSelected() {
    console.log('des')
  }
  onAuth(ev:Event) :void {
    ev.preventDefault();
    const authUser:IUser = {
      psw: this.psw,
      login: this.login
    }
   if (this.authService.checkUser(authUser)) {
     console.log('auth true');
   } else
    console.log('auth false');
    this.messageService.add({severity:'error', summary: 'Ошибка авторизации', detail: 'Неверный логин или пароль'});
    }


  // Метод проверки пользователя
  checkUser(authUser: IUser): boolean {
    let userInStore: IUser = <IUser>{}; // Объявляем и инициализируем переменную
    const userJson = window.localStorage.getItem('currentUser');

    if (userJson) {
      userInStore = JSON.parse(userJson); // Преобразуем строку в объект

      // Проверка корректности пароля (замените на свой код)
      if (userInStore.psw === authUser.psw) { // Проверяем пароль
        return true; // Возвращаем true, если пароли совпадают
      }
    }
    return false; // В противном случае, возвращаем false
  }
}
