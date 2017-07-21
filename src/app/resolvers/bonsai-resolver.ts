import { Injectable } from '@angular/core';
import { Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { Bonsai } from '../models/bonsai';
import { BonsaiService } from '../bonsai.service';

@Injectable()
export class BonsaiResolver implements Resolve<Bonsai> {
  constructor(private bonsaiService: BonsaiService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<Bonsai> {
    return this.bonsaiService.getBonsai(route.params.id);
  }
}
