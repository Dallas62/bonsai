import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {BonsaiStorageService} from '../bonsai-storage.service';
import {MyBonsai} from '../models/my-bonsai';
import {Bonsai} from '../models/bonsai';

@Component({
  selector: 'app-bonsai-detail',
  templateUrl: './bonsai-detail.component.html',
  styleUrls: ['./bonsai-detail.component.css']
})
export class BonsaiDetailComponent implements OnInit {
  id: String;

  bonsai: Bonsai;

  myBonsai: MyBonsai;

  humidity: number[];

  sun: number[];

  temperature: number[];

  static createRange(filled: number): number[] {
    const items: number[] = [];

    for (let i = 0; i < filled; i++) {
      items.push(i);
    }

    return items;
  }

  constructor(private router: Router,
              private route: ActivatedRoute,
              private bonsaiStorageService: BonsaiStorageService) {
  }

  ngOnInit() {
    this.myBonsai = this.route.snapshot.data['myBonsai'] || null;

    if (null == this.myBonsai) {
      this.bonsai = this.route.snapshot.data['bonsai'] || null;
    } else {
      this.bonsai = this.myBonsai.bonsai;
    }

    this.loadHumidityAndSun();
  }

  loadHumidityAndSun(): void {
    if (null == this.bonsai) {
      return;
    }

    this.humidity = BonsaiDetailComponent.createRange(this.bonsai.humidity);
    this.sun = BonsaiDetailComponent.createRange(this.bonsai.sun);
    this.temperature = BonsaiDetailComponent.createRange(this.bonsai.temperature);
  }

  onRename(name: String): void {
    this.myBonsai.name = name;
    this.bonsaiStorageService.save(this.myBonsai).then(
      myBonsai => this.myBonsai = myBonsai
    );
  }

  onAddToList(bonsai: Bonsai) {
    this.bonsaiStorageService.add(bonsai);

    window['bonsaiApp'].addNotification({
      closeOnClick: true,
      title: 'Ajouté à votre liste!',
      message: 'Félicitations! ' + bonsai.name + ' a été ajouté à votre liste!'
    });
  }

  onRemoveToList(myBonsai: MyBonsai) {
    this.bonsaiStorageService.remove(myBonsai);

    window['bonsaiApp'].addNotification({
      closeOnClick: true,
      title: 'Retiré de votre liste!',
      message: 'Oooh! ' + myBonsai.name + ' a été retiré de votre liste... :-/'
    });

    this.router.navigate(['/']);
  }
}
