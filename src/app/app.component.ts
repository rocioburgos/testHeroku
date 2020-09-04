import { Component, ɵConsole    } from '@angular/core';
import { unsupported } from '@angular/compiler/src/render3/view/util';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent    {
 public titulo:string = 'Ciclo de vida';
 public promedio:string ='';
 public  suma :string ='';
 public uno:string;
 public dos:string;
  constructor(){}
   
  ngOnInit() {
  }

/*   Limpiar(){
     this.uno="";
     this.suma="";
     this.promedio= "";
     this.dos="";
   }

  Calcular(){
    
    this.suma =   (parseInt(''+this.uno) + parseInt(''+this.dos)).toString();
    this.promedio = ((parseInt(''+this.uno) + parseInt(''+this.dos) )/2).toString();
    
  }*/
}
