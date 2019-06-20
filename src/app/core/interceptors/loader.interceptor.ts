import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpResponse
} from "@angular/common/http";
import { Injectable } from "@angular/core";
import { LoaderService } from "../services/loader.service";
import { tap } from "rxjs/operators";
import { catchError } from "rxjs/operators";
import { throwError } from "rxjs";

@Injectable()
export class LoaderInterceptor implements HttpInterceptor {
  private totalRequests = 0;

  constructor(private loaderService: LoaderService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler) {
    this.totalRequests++;
    this.loaderService.setLoading(true);
    return next.handle(request).pipe(
      tap(res => {
        if (res instanceof HttpResponse) {
          this.decreaseRequests();
        }
      }),
      catchError(error => {
        this.decreaseRequests();
        return throwError(error);
      })
    );
  }

  private decreaseRequests() {
    this.totalRequests--;
    if (this.totalRequests === 0) {
      this.loaderService.setLoading(false);
    }
  }
}
