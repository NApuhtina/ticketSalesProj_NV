import { Component,  OnInit } from '@angular/core';
import {AuthService} from "../../services/auth/auth.service";
import {MessageService} from "primeng/api";



@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
  providers:[MessageService]
})
export class AuthComponent implements OnInit {
  constructor(private authService:AuthService) { }

  isTabCaching:boolean=false;

  ngOnInit(): void {
  }

}
