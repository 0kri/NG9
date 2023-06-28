import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {

  const _router = inject(Router)

  const user = JSON.parse(localStorage.getItem('user')!)

  if (user) {
    _router.navigateByUrl('/members')
    return false
  }

  return true;

};
