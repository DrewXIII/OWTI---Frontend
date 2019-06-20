import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { tap } from "rxjs/operators";
import { Local, FinalLocal } from "../core.models";

@Injectable({
  providedIn: "root"
})
export class LocalService {
  localRequested: FinalLocal;

  constructor(private http: HttpClient) {}

  getLocal(fullName) {
    return this.http
      .get(`${environment.apiBaseUrl}/search/${fullName}`)
      .pipe(tap((user: FinalLocal) => (this.localRequested = user)));
  }
}
