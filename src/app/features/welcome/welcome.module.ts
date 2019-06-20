import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Routes, RouterModule } from "@angular/router";
import { WelcomeComponent } from "./welcome/welcome.component";
import { WelcomeHeroComponent } from "./welcome-hero/welcome-hero.component";
import { WelcomeHero2Component } from "./welcome-hero2/welcome-hero2.component";

const routes: Routes = [
  {
    path: "",
    component: WelcomeComponent
  }
];

@NgModule({
  declarations: [WelcomeComponent, WelcomeHeroComponent, WelcomeHero2Component],
  imports: [CommonModule, RouterModule.forChild(routes)]
})
export class WelcomeModule {}
