import { Component, Input } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";

@Component({
  selector: "ow-validation-messages",
  templateUrl: "./validation-messages.component.html",
  styleUrls: ["./validation-messages.component.scss"]
})
export class ValidationMessagesComponent {
  @Input() control: FormControl;
  @Input() group: FormGroup;
}
