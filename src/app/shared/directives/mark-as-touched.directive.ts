import { Directive, Input, HostListener } from "@angular/core";
import { FormGroup } from "@angular/forms";

@Directive({
  selector: "[owMarkAsTouched]"
})
export class MarkAsTouchedDirective {
  @Input() owMarkAsTouched: FormGroup;

  @HostListener("submit", ["$event"])
  onSubmit(event) {
    Object.values(this.owMarkAsTouched.controls).forEach(control =>
      control.markAsTouched()
    );
  }
}
