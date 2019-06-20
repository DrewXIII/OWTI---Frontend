import { Component, OnInit, ViewChild } from "@angular/core";
import { fromEvent } from "rxjs";
import {
  debounceTime,
  map,
  filter,
  distinctUntilChanged
} from "rxjs/operators";

import { SearchLocalService } from "src/app/core/services/search-local.service";

@Component({
  selector: "ow-search",
  templateUrl: "./search.component.html",
  styleUrls: ["./search.component.scss"]
})
export class SearchComponent implements OnInit {
  @ViewChild("searchText") inputElement;

  constructor(public searchLocalService: SearchLocalService) {}

  ngOnInit() {
    fromEvent(this.inputElement.nativeElement, "keyup")
      .pipe(
        debounceTime(300),
        map((event: any) => event.target.value),
        filter(text => text.length > 3),
        distinctUntilChanged()
      )
      .subscribe(data => {
        this.searchLocalService.search(data).subscribe();
      });
  }
}
