import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../../core/services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService, private router : Router) { }

  ngOnInit(): void {
  }
 onLogin() : void {
    this.authService.login();
    //on doit verifier que login a été bien passée
   this.router.navigateByUrl('/facesnaps');

 }
}
