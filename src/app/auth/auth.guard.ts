import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {
  const authservice: AuthService = inject(AuthService);
  const router: Router = inject(Router);
  if(authservice.isLoggedinguard)
    return true;
  else
  {
    router.navigate(['/login']); 
    return false;
  }
  return true;
};
