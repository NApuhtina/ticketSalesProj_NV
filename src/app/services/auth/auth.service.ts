import { Injectable } from '@angular/core';
import IUser from "../../models/IUser";

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  private usersStorage: IUser[] = [];
  constructor() {}
  checkUser(user: IUser): boolean {
    let foundUser = this.usersStorage.find(
      (el) => el.login === user.login
    );
    if (foundUser) {
      return user.psw === foundUser.psw;
    } else {
      const localStorageUser = window.localStorage.getItem(`user_${user.login}`);
      if(localStorageUser) {
        foundUser = JSON.parse(localStorageUser) as IUser;
        return foundUser.psw === user.psw
      } else {
        return false;
      }
    }
  }
  setUser(user: IUser, saveUserToLocalStorage: boolean): boolean {
    const foundUser = this.usersStorage.find(
      (el) => el.login === user.login
    );
    if(!foundUser && user?.login) {
      if(saveUserToLocalStorage) {
        window.localStorage.setItem(`user_${user.login}`, JSON.stringify(user));
        return true;
      } else {
        this.usersStorage.push(user)
        return true;
      }
    }
    return false;
  }
  isUserExists(user: IUser): boolean {
    const foundUser = this.usersStorage.find(
      (el) => el.login === user.login
    );
    if(foundUser) {
      return true;
    } else {
      return false;
    }
  }
}
