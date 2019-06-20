import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";

import { CapitalizePipe } from "./pipes/capitalize.pipe";
import { LoaderComponent } from "./components/loader/loader.component";
import { LoginComponent } from "./components/login/login.component";
import { MarkAsTouchedDirective } from "./directives/mark-as-touched.directive";
import { NotFoundComponent } from "./components/not-found/not-found.component";
import { RegisterComponent } from "./components/register/register.component";
import { ValidationMessagesComponent } from "./validation-messages/validation-messages.component";

@NgModule({
  declarations: [
    CapitalizePipe,
    LoaderComponent,
    LoginComponent,
    MarkAsTouchedDirective,
    NotFoundComponent,
    RegisterComponent,
    ValidationMessagesComponent
  ],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [
    CapitalizePipe,
    LoginComponent,
    LoaderComponent,
    MarkAsTouchedDirective,
    NotFoundComponent,
    RegisterComponent,
    ValidationMessagesComponent
  ]
})
export class SharedModule {}
