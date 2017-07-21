import {Component, OnInit, ChangeDetectorRef, ChangeDetectionStrategy} from '@angular/core';
import {Router, NavigationEnd} from '@angular/router';

@Component({
  selector: '[app-root]',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {
  title: string;
  currentUrl: string;
  latestUrl: string[];

  constructor(private ref: ChangeDetectorRef, private router: Router) {
  }

  ngOnInit() {
    this.title = 'Bonsai!';
    this.currentUrl = '';
    this.latestUrl = ['/home', '/home'];
    this.router.events.subscribe(
      (value: NavigationEnd) => this.OnNavigation(value)
    );
  }

  OnOpenMenu(): void {
    console.log('c;lick');
    window['bonsaiApp'].openPanel('left');
  }

  OnNavigation(value: NavigationEnd): void {
    if (this.currentUrl !== value.url) {
      this.currentUrl = value.url;

      if (-1 === this.latestUrl.indexOf(this.currentUrl)) {
        this.latestUrl.push(this.currentUrl);
      } else {
        this.latestUrl.pop();
      }

      this.ref.markForCheck();
    }
  }
}
