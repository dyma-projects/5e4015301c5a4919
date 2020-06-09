import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-exercice3',
  templateUrl: './exercice3.component.html',
  styleUrls: ['./exercice3.component.css']
})
export class Exercice3Component implements OnInit {
  @Output() public changeStatus: EventEmitter<any> = new EventEmitter();
  @Input() public getStatus: boolean;
  public statut:boolean=true;
  constructor() { }

  ngOnInit(): void {
  }

  
  setStatus() {
    this.statut= !this.statut;
    this.getStatus = this.statut;
    this.changeStatus.emit(this.statut);
     
  }

}
