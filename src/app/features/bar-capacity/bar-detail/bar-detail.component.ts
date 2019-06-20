import { Component, OnInit, OnDestroy } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

import { CapacityService } from "src/app/core/services/capacity.service";
import { LocalService } from "src/app/core/services/local.service";

@Component({
  selector: "ow-bar-detail",
  templateUrl: "./bar-detail.component.html",
  styleUrls: ["./bar-detail.component.scss"]
})
export class BarDetailComponent implements OnInit, OnDestroy {
  today: number = Date.now();

  barDetail: any;
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
