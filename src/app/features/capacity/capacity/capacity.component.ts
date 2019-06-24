import { Component, OnInit } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { CapacityService } from "src/app/core/services/capacity.service";
import { AuthService } from "src/app/core/services/auth.service";

@Component({
  selector: "ow-capacity",
  templateUrl: "./capacity.component.html",
  styleUrls: ["./capacity.component.scss"]
})
export class CapacityComponent implements OnInit {
  updateUserCapacityForm = this.fb.group({
    capacity: ["", [Validators.required]]
  });

  constructor(
    private fb: FormBuilder,
    private capacityService: CapacityService,
    public authService: AuthService
  ) {}

  ngOnInit() {
    this.updateUserCapacityForm.setValue({
      capacity: this.capacityService.currentCapacity.capacity
    });
  }

  updateUserCapacity() {
    if (this.updateUserCapacityForm.valid) {
      this.capacityService
        .updateUserCapacity(this.updateUserCapacityForm.value)
        .subscribe();
    }
  }
}
