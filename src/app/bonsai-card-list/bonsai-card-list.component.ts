import { Component, Input, OnInit } from '@angular/core';
import { MyBonsai } from '../models/my-bonsai';
import { Bonsai } from '../models/bonsai';

@Component({
  selector: 'app-bonsai-card-list',
  templateUrl: './bonsai-card-list.component.html',
  styleUrls: ['./bonsai-card-list.component.css']
})
export class BonsaiCardListComponent implements OnInit {

  @Input() title: String;

  @Input() bonsais: Bonsai[];

  @Input() myBonsais: MyBonsai[];

  constructor() { }

  ngOnInit(): void {
    this.bonsais = this.bonsais || [];
    this.myBonsais = this.myBonsais || [];
  }
}
