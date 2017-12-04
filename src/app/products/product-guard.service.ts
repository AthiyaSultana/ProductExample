import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router} from '@angular/router';

@Injectable()
export class ProductGuardService implements CanActivate{

  constructor(private _router: Router) { }
  canActivate(route: ActivatedRouteSnapshot): boolean {
  console.log(`Route params ${route}`);
  let id = +route.url[1].path;
   if (isNaN(id) || id < 0 ) {
     alert('Invalid product id');
     this._router.navigate(['/products']);
     return false;
   }
   return true;
  }

}
