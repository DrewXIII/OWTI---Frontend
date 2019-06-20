import { Component, OnInit } from "@angular/core";

@Component({
  selector: "ow-welcome-hero2",
  templateUrl: "./welcome-hero2.component.html",
  styleUrls: ["./welcome-hero2.component.scss"]
})
export class WelcomeHero2Component implements OnInit {
  title: string;
  title2: string;
  content: string;
  content2: string;
  content3: string;

  constructor() {}

  ngOnInit() {
    this.title = "Time is now.";
    this.title2 = "Don´t lose it.";
    this.content = "OWTI is a time management tool.";
    this.content2 = "No more unnecessary queues or rides.";
    this.content3 =
      "Get real-time status information on your favorite locations.";
  }
}
