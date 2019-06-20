import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { tap } from "rxjs/operators";
import { AuthInfo } from "../core.models";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  authInfo: AuthInfo;

  constructor(private http: HttpClient, private router: Router) {
    this.authInfo = JSON.parse(localStorage.getItem("auth"));
  }

  login({ email, password }) {
    return this.http
      .post(`${environment.apiBaseUrl}/account/login`, {
        email,
        password
      })
      .pipe(
        tap((info: AuthInfo) => {
          this.authInfo = info;
          localStorage.setItem("auth", JSON.stringify(info));
        })
      );
  }

  register({ email, password }) {
    return this.http.post(`${environment.apiBaseUrl}/account`, {
      email,
      password
    });
  }

  logout() {
    localStorage.removeItem("auth");
    this.authInfo = null;
    this.router.navigate(["/welcome"]);
  }
}
