import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-exercice2',
  templateUrl: './exercice2.component.html',
  styleUrls: ['./exercice2.component.css']
})
export class Exercice2Component implements OnInit {
  @Input() public formation: string;
  @Output() public getMessage: EventEmitter<string> = new EventEmitter();
  message = ''; 
  
  constructor() { }

  ngOnInit() {
  }
  displayMessage() {
    this.message = 'Message From Child To Parent!';
    this.getMessage.emit(this.message);
  }
  

}
