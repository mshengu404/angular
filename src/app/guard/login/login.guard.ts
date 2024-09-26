import { ActivatedRoute, ActivatedRouteSnapshot, CanActivateFn, RouterStateSnapshot } from '@angular/router';

export const loginGuard: CanActivateFn = (next: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
  return true;
};
