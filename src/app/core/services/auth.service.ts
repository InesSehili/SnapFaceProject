import {Injectable} from "@angular/core";
import {provideRoutes} from "@angular/router";

@Injectable({
providedIn : 'root'
  })
export class AuthService {
  private token! : string;

  login(): void {
    this.token = "my fake token";
  }

  getToken(): string{
    return this.token;
  }
}
