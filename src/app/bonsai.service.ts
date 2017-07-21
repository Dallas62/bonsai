import {Injectable} from '@angular/core';
import {Bonsai} from './models/bonsai';

import BONSAIS from './dummy-data';

import PouchDB from 'pouchdb-browser';

const STORAGE_KEY = 'bonsai-storage';

@Injectable()
export class BonsaiService {
  private database: PouchDB;

  constructor() {
    this.database = new PouchDB(STORAGE_KEY);
    this.database.bulkDocs(BONSAIS);
  }

  async getBonsai(id: String): Promise<Bonsai> {
    return await this.database.get(id);
  }

  async getBonsais(): Promise<Bonsai[]> {
    return await this.database.allDocs({
      include_docs: true
    }).then(result =>
      Promise.all(result.rows.map(
        row => row.doc
      ))
    );
  }

  async getLatestBonsais(number: number): Promise<Bonsai[]> {
    return await this.database.allDocs({
      include_docs: true,
      descending: true,
      limit: number
    }).then(result =>
      Promise.all(result.rows.map(
        row => row.doc
      ))
    );
  }

  async getRandomBonsais(number: number): Promise<Bonsai[]> {
    return await this.getBonsais().then(
    bonsais =>
      Promise.all(
        bonsais.sort(
        () => 0.5 - Math.random()
        ).slice(0, number)
      )
    );
  }

  search(input: String): Bonsai[] {
    return [];
  }
}
