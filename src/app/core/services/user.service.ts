import { Injectable } from "@angular/core";
import { OwtiUser } from "../core.models";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { tap } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class UserService {
  currentUser: OwtiUser;

  constructor(private http: HttpClient) {}

  getUserProfile() {
    return this.http
      .get(`${environment.apiBaseUrl}/user`)
      .pipe(tap((user: OwtiUser) => (this.currentUser = user)));
  }

  updateProfile(profile) {
    return this.http.put(`${environment.apiBaseUrl}/user`, profile).pipe(
      tap(() => {
        this.currentUser = {
          ...this.currentUser,
          ...profile
        };
      })
    );
  }
}
