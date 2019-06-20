import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

import { FooterComponent } from "./footer/footer.component";
import { HeaderComponent } from "./header/header.component";
import { MainLayoutComponent } from "./main-layout/main-layout.component";
import { ModalComponent } from "./modal/modal.component";
import { SharedModule } from "../shared/shared.module";
import { ToastComponent } from "./toast/toast.component";
import { NavComponent } from './nav/nav.component';

@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    MainLayoutComponent,
    ModalComponent,
    ToastComponent,
    NavComponent
  ],
  imports: [CommonModule, RouterModule, SharedModule],
  exports: [
    FooterComponent,
    HeaderComponent,
    MainLayoutComponent,
    ModalComponent,
    ToastComponent
  ]
})
export class LayoutModule {}
