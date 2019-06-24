import { Component } from "@angular/core";
import { AuthService } from "src/app/core/services/auth.service";

@Component({
  selector: "ow-main-layout",
  templateUrl: "./main-layout.component.html",
  styleUrls: ["./main-layout.component.scss"]
})
export class MainLayoutComponent {
  constructor(public authService: AuthService) {}
}
