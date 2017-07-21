import { Component, ChangeDetectorRef, OnInit } from '@angular/core';
import { BonsaiStorageService } from '../bonsai-storage.service';
import { BonsaiService } from '../bonsai.service';
import { MyBonsai } from '../models/my-bonsai';
import { Bonsai } from '../models/bonsai';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [ BonsaiService, BonsaiStorageService ]
})
export class HomeComponent implements OnInit {

  displayed: number;

  latestBonsais: Bonsai[];

  myLatestBonsais: MyBonsai[];

  randomBonsais: Bonsai[];

  constructor(
    private ref: ChangeDetectorRef,
    private bonsaiService: BonsaiService,
    private bonsaiStorageService: BonsaiStorageService) {
  }

  ngOnInit() {
    this.displayed = 5;
    this.loadLatestBonsais();
    this.loadMyLatestBonsais();
    this.loadRandomBonsais();
  }

  loadLatestBonsais() {
    this.latestBonsais = [];
    this.bonsaiService.getLatestBonsais(this.displayed).then(
      bonsais => {
        this.latestBonsais = bonsais;
        this.ref.markForCheck();
      }
    );
  }

  loadMyLatestBonsais() {
    this.myLatestBonsais = [];
    this.bonsaiStorageService.getLatestBonsais(this.displayed).then(
      myBonsais => {
        this.myLatestBonsais = myBonsais;
        this.ref.markForCheck();
      }
    );
  }

  loadRandomBonsais() {
    this.randomBonsais = [];
    this.bonsaiService.getRandomBonsais(this.displayed).then(
      bonsais => {
        this.randomBonsais = bonsais;
        this.ref.markForCheck();
      }
    );
  }
}
