import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { AuthGuard } from "./core/guards/auth.guard";
import { MainLayoutComponent } from "./layout/main-layout/main-layout.component";
import { NotFoundComponent } from "./shared/components/not-found/not-found.component";

const routes: Routes = [
  {
    path: "",
    redirectTo: "welcome",
    pathMatch: "full"
  },
  {
    path: "welcome",
    loadChildren: "./features/welcome/welcome.module#WelcomeModule"
  },
  {
    path: "about-us",
    loadChildren: "./features/about-us/about-us.module#AboutUsModule"
  },
  {
    path: "bar-capacity",
    loadChildren:
      "./features/bar-capacity/bar-capacity.module#BarCapacityModule"
  },
  {
    path: "work-with-us",
    loadChildren: "./features/work-with-us/work-with-us.module#WorkWithUsModule"
  },
  {
    path: "",
    component: MainLayoutComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: "capacity",
        loadChildren: "./features/capacity/capacity.module#CapacityModule"
      },
      {
        path: "my-account",
        loadChildren: "./features/my-account/my-account.module#MyAccountModule"
      }
    ]
  },
  {
    path: "**",
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
