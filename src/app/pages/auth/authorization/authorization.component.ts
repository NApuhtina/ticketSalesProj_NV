import {Component, OnDestroy, OnInit} from '@angular/core';
import {UserService} from "../../../services/user/user.service";
import { ActivatedRoute, Router } from '@angular/router';
import {AuthService} from "../../../services/auth/auth.service";
import IUser from "src/app/models/IUser";
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-authorization',
  templateUrl: './authorization.component.html',
  styleUrls: ['./authorization.component.css'],
 })

export class AuthorizationComponent implements OnInit, OnDestroy {
  loginText = 'Логин';
  pswText = 'Пароль';
  psw: string;
  login: string;
  selectedValues: boolean = false;
  cardNumber: string;
  authTextButton: string;

  constructor(private authService: AuthService,
              private messageService: MessageService,
              private router: Router,
              private route: ActivatedRoute,
              private userService: UserService
  ) {
  }

  ngOnInit(): void {
    this.authTextButton = "Авторизоваться";
  }

  ngOnDestroy(): void {
    console.log('ngOnDes?')
  }

  vipStatusSelected() {
  }

  onAuth(ev: Event): void {
    ev.preventDefault();
    const user: IUser = {
      psw: this.psw,
      login: this.login,
    };

    if (this.authService.checkUser(user)) {
      this.userService.setUser(user);
      this.router.navigate(['tickets/tickets-list']);
    } else {
      this.messageService.add({
        severity: 'error',
        summary: 'Ошибка авторизации',
        detail:
          'Пользователь с такими данными не существует или введен неверный пароль',
      });
    }
  }
}

