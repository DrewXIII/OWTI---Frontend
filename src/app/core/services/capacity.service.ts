import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { tap } from "rxjs/operators";

import { Capacity } from "../core.models";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root"
})
export class CapacityService {
  currentCapacity: Capacity;

  constructor(private http: HttpClient) {}

  getUserCapacity() {
    return this.http
      .get(`${environment.apiBaseUrl}/user/capacity`)
      .pipe(tap((capacity: Capacity) => (this.currentCapacity = capacity)));
  }

  updateUserCapacity(capacity) {
    return this.http
      .put(`${environment.apiBaseUrl}/user/capacity`, {
        capacity: capacity.capacity
      })
      .pipe(
        tap(() => {
          this.currentCapacity = {
            ...this.currentCapacity,
            ...capacity
          };
        })
      );
  }
}
