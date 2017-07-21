import { Component, Input, OnInit } from '@angular/core';
import { MyBonsai } from '../models/my-bonsai';
import { Bonsai } from '../models/bonsai';

@Component({
  selector: 'app-bonsai-card-list-item',
  templateUrl: './bonsai-card-list-item.component.html',
  styleUrls: ['./bonsai-card-list-item.component.css']
})
export class BonsaiCardListItemComponent implements OnInit {

  url: String;

  @Input() bonsai: Bonsai;

  @Input() myBonsai: MyBonsai;

  constructor() { }

  ngOnInit() {
    if(this.myBonsai != null) {
      this.url = '/my/' + this.myBonsai._id;
      this.bonsai = this.myBonsai.bonsai;
    } else {
      this.url = '/bonsais/' + this.bonsai._id;
    }
  }
}
