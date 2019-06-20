import { Component, OnInit, OnDestroy } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

import { CapacityService } from "src/app/core/services/capacity.service";
import { LocalService } from "src/app/core/services/local.service";
import { SearchLocalService } from "src/app/core/services/search-local.service";
import { FinalLocal } from "src/app/core/core.models";

@Component({
  selector: "ow-circle-progress",
  templateUrl: "./circle-progress.component.html",
  styleUrls: ["./circle-progress.component.scss"]
})
export class CircleProgressComponent implements OnInit {
  today: number = Date.now();

  barDetail: FinalLocal;
  private sub: any;

  constructor(
    private route: ActivatedRoute,
    private localService: LocalService,
    private capacityService: CapacityService
  ) {}

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      console.log({ params });
      this.localService.getLocal(params["fullName"]).subscribe(
        result => {
          this.barDetail = result;
          console.log({ barDetail: this.barDetail });
        },
        error => console.log("Error" + error)
      );
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
