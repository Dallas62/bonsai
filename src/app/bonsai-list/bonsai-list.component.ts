import { Component, ChangeDetectorRef, OnInit } from '@angular/core';
import { BonsaiService } from '../bonsai.service';
import { Bonsai } from '../models/bonsai';

@Component({
  selector: 'app-bonsai-list',
  templateUrl: './bonsai-list.component.html',
  styleUrls: ['./bonsai-list.component.css'],
  providers: [ BonsaiService ]
})
export class BonsaiListComponent implements OnInit {

  bonsais: Bonsai[];

  constructor(
    private ref: ChangeDetectorRef,
    private bonsaiService: BonsaiService) {
  }

  ngOnInit() {
    this.loadBonsais();
  }

  loadBonsais(): void {
    this.bonsais = [];
    this.bonsaiService.getBonsais().then(
      bonsais => {
        this.bonsais = bonsais;
        this.ref.markForCheck();
      }
    );
  }
}
