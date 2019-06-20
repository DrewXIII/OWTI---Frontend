import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { tap } from "rxjs/operators";
import { Capacity } from "../core.models";

@Injectable({
  providedIn: "root"
})
export class LocalCapacityService {
  currentCapacity: Capacity;

  constructor(private http: HttpClient) {}

  getLocalCapacity() {
    return this.http
      .get(`${environment.apiBaseUrl}/user/capacity`)
      .pipe(tap((capacity: Capacity) => (this.currentCapacity = capacity)));
  }
}
