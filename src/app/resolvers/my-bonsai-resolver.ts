import { Injectable } from '@angular/core';
import { Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { MyBonsai } from '../models/my-bonsai';
import { BonsaiStorageService } from '../bonsai-storage.service';

@Injectable()
export class MyBonsaiResolver implements Resolve<MyBonsai> {
  constructor(private bonsaiStorageService: BonsaiStorageService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<MyBonsai> {
    return this.bonsaiStorageService.getBonsai(route.params.id);
  }
}
