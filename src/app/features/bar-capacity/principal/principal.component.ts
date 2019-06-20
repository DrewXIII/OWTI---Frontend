import { Component, OnInit } from "@angular/core";

import { UserService } from "src/app/core/services/user.service";

@Component({
  selector: "ow-principal",
  templateUrl: "./principal.component.html",
  styleUrls: ["./principal.component.scss"]
})
export class PrincipalComponent {
  constructor(private userService: UserService) {}
}
