import {Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-my-bonsai-form',
  templateUrl: './my-bonsai-form.component.html',
  styleUrls: ['./my-bonsai-form.component.css']
})
export class MyBonsaiFormComponent {

  @Input() name: String;

  @Output() onRename = new EventEmitter<String>();

  constructor() {
  }

  rename() {
    if (this.name.trim().length === 0) {
      return;
    }

    this.onRename.emit(this.name);
  }
}
