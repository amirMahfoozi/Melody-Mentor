import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from './services/authentication.service';

export const authGuard = () => {
  const router = inject(Router);
  const authorizedService = inject(AuthenticationService);

  var storageData = localStorage.getItem('id_token')

  if (!authorizedService.hasAuthenticate) {
    router.navigateByUrl('/notauthorized');
    return false;
  }

  return true;
};
