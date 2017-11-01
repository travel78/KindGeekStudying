import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Params } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { ResourceService } from './resource.service';


@Injectable()
export class EditPageCanActivateService implements CanActivate {

  constructor(private resService: ResourceService) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
    return this.resService.getOneByIndex(+route.paramMap.get('id')).like;
  }
}
