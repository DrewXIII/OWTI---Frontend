import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "ow-welcome-hero",
  templateUrl: "./welcome-hero.component.html",
  styleUrls: ["./welcome-hero.component.scss"]
})
export class WelcomeHeroComponent implements OnInit {
  title: string;

  constructor() {}

  ngOnInit() {
    this.title = "OWTI";
  }
}
