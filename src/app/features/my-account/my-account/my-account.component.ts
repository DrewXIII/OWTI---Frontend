import { Component, OnInit } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";

import { UserService } from "src/app/core/services/user.service";

@Component({
  selector: "ow-my-account",
  templateUrl: "./my-account.component.html",
  styleUrls: ["./my-account.component.scss"]
})
export class MyAccountComponent implements OnInit {
  updateProfileForm = this.fb.group({
    fullName: ["", [Validators.required]],
    details: this.fb.group({
      maxCapacity: ["", [Validators.nullValidator]],
      openingHours: ["", [Validators.nullValidator]]
    }),
    address: this.fb.group({
      addressLocality: ["", [Validators.nullValidator]],
      addressRegion: ["", [Validators.nullValidator]],
      postalCode: ["", [Validators.nullValidator]],
      streetAddress: ["", [Validators.nullValidator]]
    }),
    preferences: this.fb.group({
      twitter: ["", [Validators.nullValidator]],
      instagram: ["", [Validators.nullValidator]],
      facebook: ["", [Validators.nullValidator]],
      web: ["", [Validators.nullValidator]],
      description: []
    }),
    contact: this.fb.group({
      email: ["", [Validators.nullValidator]],
      phoneNumber: ["", [Validators.nullValidator]]
    })
  });

  constructor(private fb: FormBuilder, private userService: UserService) {}

  ngOnInit() {
    this.updateProfileForm.setValue({
      fullName: this.userService.currentUser.fullName,
      details: {
        ...this.userService.currentUser.details
      },
      address: {
        ...this.userService.currentUser.address
      },
      preferences: {
        ...this.userService.currentUser.preferences
      },
      contact: {
        ...this.userService.currentUser.contact
      }
    });
  }

  updateProfile() {
    if (this.updateProfileForm.valid) {
      for (const prop of this.updateProfileForm.value) {
        if (!this.updateProfileForm.value.details[prop]) {
          this.updateProfileForm.value.details[prop] = "";
        }
        if (!this.updateProfileForm.value.address[prop]) {
          this.updateProfileForm.value.address[prop] = "";
        }
        if (!this.updateProfileForm.value.preferences[prop]) {
          this.updateProfileForm.value.preferences[prop] = "";
        }
        if (!this.updateProfileForm.value.contact[prop]) {
          this.updateProfileForm.value.contact[prop] = "";
        }
      }
      this.userService.updateProfile(this.updateProfileForm.value).subscribe();
    }
  }
}
