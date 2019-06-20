import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { WorkWithUsComponent } from "./work-with-us/work-with-us.component";
import { Routes, RouterModule } from "@angular/router";
import { SharedModule } from "src/app/shared/shared.module";

const routes: Routes = [
  {
    path: "",
    component: WorkWithUsComponent
  }
];

@NgModule({
  declarations: [WorkWithUsComponent],
  imports: [CommonModule, RouterModule.forChild(routes), SharedModule]
})
export class WorkWithUsModule {}
