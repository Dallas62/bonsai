import { Component, ChangeDetectorRef, OnInit } from '@angular/core';
import { BonsaiStorageService } from '../bonsai-storage.service';
import { MyBonsai } from '../models/my-bonsai';

@Component({
  selector: 'app-my-list',
  templateUrl: './my-list.component.html',
  styleUrls: ['./my-list.component.css']
})
export class MyListComponent implements OnInit {

  myBonsais: MyBonsai[];

  constructor(
    private ref: ChangeDetectorRef,
    private bonsaiStorageService: BonsaiStorageService) {
  }

  ngOnInit() {
    this.loadMyBonsais();
  }

  loadMyBonsais(): void {
    this.myBonsais = [];
    this.bonsaiStorageService.getBonsais().then(
      bonsais => {
        this.myBonsais = bonsais;
        this.ref.markForCheck();
      }
    );
  }

}
