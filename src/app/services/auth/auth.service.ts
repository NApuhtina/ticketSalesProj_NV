import { Injectable } from '@angular/core';
import {IUser} from "../../models/users";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private userStorage: IUser[]=[];

  constructor() { }

  checkUser(user:IUser):boolean {
     const isUserExists = this.userStorage.find((el:IUser)=> el.login === user.login);
     if(isUserExists) {
       return isUserExists.psw === user.psw;
     }
     return false;
  }

  setUser(user:IUser):void  {
    const isUserExists = this.userStorage.find((el)=> el.login === user.login);
    if(!isUserExists && user?.login) {
      this.userStorage.push (user);
    }

  }
  isUserExists(user:IUser):boolean {
    const isUserExists = this.userStorage.find((el:IUser)=> el.login === user.login);
      return !isUserExists;
    }
   }

