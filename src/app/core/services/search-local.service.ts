import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

import { tap } from "rxjs/operators";

import { environment } from "src/environments/environment";
import { SearchResult } from "../core.models";

@Injectable({
  providedIn: "root"
})
export class SearchLocalService {
  searchResults: SearchResult[] = [];

  constructor(private http: HttpClient) {}

  search(text: string) {
    return this.http
      .get(`${environment.apiBaseUrl}/search`, {
        params: {
          q: text
        }
      })
      .pipe(tap((results: SearchResult[]) => (this.searchResults = results)));
  }
}
