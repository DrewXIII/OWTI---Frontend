import { Injectable } from "@angular/core";
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent
} from "@angular/common/http";
import { Router } from "@angular/router";

import { catchError } from "rxjs/operators";
import { Observable, throwError } from "rxjs";

import { AuthService } from "../services/auth.service";
import { ToastService } from "../services/toast.service";

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  constructor(
    private authService: AuthService,
    private router: Router,
    private toastService: ToastService
  ) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      catchError(error => {
        if (
          error.url.indexOf("/account/login") === -1 &&
          this.router.routerState.snapshot.url !== "/welcome" &&
          error.status === 401
        ) {
          this.authService.logout();
        } else {
          this.toastService.addToast(error.error[0]);
        }

        return throwError(error);
      })
    );
  }
}
