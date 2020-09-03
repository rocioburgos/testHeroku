import { Component, ɵConsole    } from '@angular/core';
import { unsupported } from '@angular/compiler/src/render3/view/util';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent    {
  titulo:string = 'Ciclo de vida';
   promedio:number =0;
   suma :number =0;
   uno;
   dos;
  constructor(){}
   
   Limpiar(){
     this.uno='';
     this.dos='';
   }

  Calcular( uno:number, dos:number ){
    
    uno = parseInt(''+uno);
    dos = parseInt(''+dos);

    this.suma = uno + dos;
    this.promedio = (uno + dos )/2;

    //console.log(uno *2);
    console.log(typeof(parseInt( ''+dos) ) , typeof(uno), uno);
    console.log(typeof(parseInt( ''+dos) ) , typeof(dos), dos);
  }
}
