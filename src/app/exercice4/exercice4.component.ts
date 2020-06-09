import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-exercice4',
  templateUrl: './exercice4.component.html',
  styleUrls: ['./exercice4.component.css']
})
export class Exercice4Component implements OnInit {
  @Input() public text: string;
  constructor() { }

  ngOnInit(): void {
  }

}
