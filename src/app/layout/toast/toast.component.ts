import { Component } from "@angular/core";
import { ToastService } from "src/app/core/services/toast.service";

@Component({
  selector: "ow-toast",
  templateUrl: "./toast.component.html",
  styleUrls: ["./toast.component.scss"]
})
export class ToastComponent {
  constructor(public toastService: ToastService) {}
}
