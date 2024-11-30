import {Injectable} from '@angular/core';
import IUser from 'src/app/models/IUser';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private user: IUser;
  private token: string;

  constructor() {
  }

  getUser(): IUser {
    const userFromStore = window.localStorage.getItem('user');
    return this.user || (userFromStore ? JSON.parse(userFromStore) : null);
  }

  setUser(user: IUser): void {
    this.user = user;
  }

  setToken(token: string): void {
    this.token = token;
  }

  getToken(): string {
    return this.token;
  }

  logout(): void {
    this.user = {} as IUser;
    this.token = '';
    console.log('Данные пользователя зачищены');
  }

  changePassword(password: string): void {
    const user: IUser = this.getUser();
    user.password = password;
    this.user = user;
    window.localStorage.setItem('user', JSON.stringify(user));
  }
}
