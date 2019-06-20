import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { BarCapacityComponent } from "./bar-capacity/bar-capacity.component";
import { BarDetailComponent } from "./bar-detail/bar-detail.component";
import { PrincipalComponent } from "./principal/principal.component";
import { SearchComponent } from "./search/search.component";

// Import ng-circle-progress
import { NgCircleProgressModule } from "ng-circle-progress";
import { CircleProgressComponent } from "./bar-detail/circle-progress/circle-progress.component";
import { AvatarComponent } from "./bar-detail/avatar/avatar.component";
import { MapComponent } from './bar-detail/map/map.component';

const routes: Routes = [
  {
    path: "",
    component: BarCapacityComponent
  },
  {
    path: "details/:fullName",
    component: BarDetailComponent
  }
];

@NgModule({
  declarations: [
    BarCapacityComponent,
    SearchComponent,
    PrincipalComponent,
    BarDetailComponent,
    CircleProgressComponent,
    AvatarComponent,
    MapComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    // Specify ng-circle-progress as an import
    NgCircleProgressModule.forRoot()
  ]
})
export class BarCapacityModule {}
