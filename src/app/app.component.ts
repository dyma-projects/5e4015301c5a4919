import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  public formation: string = "Formation Angular";
  public message: string = "Clic";
  public status:boolean 
  public getStatus:boolean;  
  public texts: string[] = ["un", "deux","trois"];
 
  alertMessage(formation) {
    alert(this.formation)
  }
  displayMessage(message){
    console.log(this.message)
    
  }
  setStatus(status){
    this.status=status;   
  }
}
