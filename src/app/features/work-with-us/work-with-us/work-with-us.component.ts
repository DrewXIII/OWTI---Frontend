import { Component, OnInit } from "@angular/core";
import { ModalService } from "src/app/core/services/modal.service";

@Component({
  selector: "ow-work-with-us",
  templateUrl: "./work-with-us.component.html",
  styleUrls: ["./work-with-us.component.scss"]
})
export class WorkWithUsComponent implements OnInit {
  constructor(private modalService: ModalService) {}

  ngOnInit() {}

  open() {
    this.modalService.open("Register", "Que tal");
  }
}
