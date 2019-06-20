import { UserService } from "./core/services/user.service";
import { NgModule, APP_INITIALIZER } from "@angular/core";
import { CapacityService } from "./core/services/capacity.service";

export function getInitialData(userService: UserService) {
  return () => {
    if (localStorage.getItem("auth")) {
      return new Promise(async resolve => {
        try {
          await userService.getUserProfile().toPromise();

          return resolve();
        } catch (error) {
          return resolve(error);
        }
      });
    }
    return Promise.resolve();
  };
}

export function getCurrentCapacityInitialData(
  capacityService: CapacityService
) {
  return () => {
    if (localStorage.getItem("auth")) {
      return new Promise(async resolve => {
        try {
          await capacityService.getUserCapacity().toPromise();

          return resolve();
        } catch (error) {
          return resolve(error);
        }
      });
    }
    return Promise.resolve();
  };
}

@NgModule({
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: getInitialData,
      deps: [UserService],
      multi: true
    },
    {
      provide: APP_INITIALIZER,
      useFactory: getCurrentCapacityInitialData,
      deps: [CapacityService],
      multi: true
    }
  ]
})
export class AppInitializerModule {}
