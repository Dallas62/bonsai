import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { MyBonsai } from '../models/my-bonsai';
import { Bonsai } from '../models/bonsai';

@Component({
  selector: 'app-bonsai-list-item',
  templateUrl: './bonsai-list-item.component.html',
  styleUrls: ['./bonsai-list-item.component.css']
})
export class BonsaiListItemComponent implements OnInit {

  @Input() bonsai: Bonsai;

  @Input() myBonsai: MyBonsai;

  constructor(private router: Router) {}

  ngOnInit(): void {
    if(null != this.myBonsai) {
      this.bonsai = this.myBonsai.bonsai;
    }
  }

  goToBonsai(): void {
    if(null == this.myBonsai) {
      this.router.navigate(['/bonsais/', this.bonsai._id]);
    } else {
      this.router.navigate(['/my/', this.myBonsai._id]);
    }
  }
}
