import { Component, OnInit, Input } from "@angular/core";
import { OwtiUser, FinalLocal } from "src/app/core/core.models";
import { LocalService } from "src/app/core/services/local.service";

@Component({
  selector: "ow-avatar",
  templateUrl: "./avatar.component.html",
  styleUrls: ["./avatar.component.scss"]
})
export class AvatarComponent implements OnInit {
  imageUrl = "";

  @Input() user: FinalLocal;
  @Input() width = "auto";
  @Input() height = "auto";

  constructor(public localService: LocalService) {}

  ngOnInit() {
    this.imageUrl = this.localService.localRequested.userProfile.avatarUrl;
  }
}
