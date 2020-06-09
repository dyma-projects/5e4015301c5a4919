import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-exercie1',
  templateUrl: './exercie1.component.html',
  styleUrls: ['./exercie1.component.css']
})
export class Exercie1Component implements OnInit {

  @Input() public formation: string;
  @Output() public showMessage: EventEmitter<string> = new EventEmitter();
  message = '';
  constructor() { }

  ngOnInit(): void {
  }
  alertMessage() {
    this.message = 'Message From Child To Parent!';
    this.showMessage.emit(this.message);
  }
}
