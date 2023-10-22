import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { filter, map, Observable } from 'rxjs';

@Injectable()
export class AuthGuardService implements CanActivate {
  constructor(
    private router: Router
  ) { }

  canActivate(): boolean {
    var storageData = localStorage.getItem('id_token')

    if (!storageData) {
      this.router.navigateByUrl('/notauthorized');
      return false;
    }

    return true;
  }
}
