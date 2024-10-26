import { Injectable } from '@angular/core';
import { IUser } from 'src/app/models/users';


@Injectable({
  providedIn: 'root'
})

export class AuthService {

// Проверка пользователя
  checkUser(authUser: IUser): boolean {
    let userInStore: IUser = <IUser>{}; // Объявляем и инициализируем переменную
    const userJson = window.localStorage.getItem('currentUser');

    if (userJson) {
      userInStore = JSON.parse(userJson); // Преобразуем строку в объект

      if (userInStore.psw === authUser.psw) { // Проверяем пароль
        return true; // Возвращаем true, если пароли совпадают
      }
    }
      return false; // В противном случае, возвращаем false
    }
  }
