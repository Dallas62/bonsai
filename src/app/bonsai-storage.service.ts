import {Injectable, Inject} from '@angular/core';
import {BonsaiService} from './bonsai.service';
import {MyBonsai} from './models/my-bonsai';
import {Bonsai} from './models/bonsai';

import PouchDB from 'pouchdb-browser';

const STORAGE_KEY = 'my-bonsai-storage';

@Injectable()
export class BonsaiStorageService {
  private database: PouchDB;

  constructor(@Inject(BonsaiService) private bonsaiService: BonsaiService) {
    this.database = new PouchDB(STORAGE_KEY);
  }

  async add(bonsai: Bonsai): Promise<MyBonsai> {
    return await this.database.put({
      _id: Date.now().toString(),
      name: 'Mon ' + bonsai.name,
      bonsai_id: bonsai._id
    }).then(
      result => this.getBonsai(result.id)
    );
  }

  async save(myBonsai: MyBonsai): Promise<MyBonsai> {
    delete myBonsai.bonsai;

    return await this.database.put(myBonsai).then(
      result => this.getBonsai(result.id)
    );
  }

  async getBonsai(id: String): Promise<MyBonsai> {
    return await this.database.get(id).then(doc => this.fillBonsai(doc));
  }

  remove(myBonsai: MyBonsai) {
    this.database.remove(myBonsai);
  }

  async getBonsais(): Promise<MyBonsai[]> {
    return await this.database.allDocs({
      include_docs: true,
      descending: true
    }).then(result =>
      Promise.all(result.rows.map(
        row => this.fillBonsai(row.doc)
      ))
    );
  }

  async getLatestBonsais(number: number): Promise<MyBonsai[]> {
    return await this.database.allDocs({
      include_docs: true,
      descending: true,
      limit: number
    }).then(result =>
      Promise.all(result.rows.map(
        row => this.fillBonsai(row.doc)
      ))
    );
  }

  private fillBonsai(doc): Promise<MyBonsai> {
    return this.bonsaiService.getBonsai(doc.bonsai_id)
      .then(bonsai => {
        doc.bonsai = bonsai;
        return doc;
      });
  }
}
