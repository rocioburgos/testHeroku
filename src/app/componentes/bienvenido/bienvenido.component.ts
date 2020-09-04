import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-bienvenido',
  templateUrl: './bienvenido.component.html',
  styleUrls: ['./bienvenido.component.css']
})
export class BienvenidoComponent implements OnInit {
  public titulo:string = 'Ciclo de vida';
  public promedio:string ='';
  public  suma :string ='';
  public uno:string;
  public dos:string;
  
  constructor(private route:Router) { }

  ngOnInit(): void {
  }

  Limpiar(){
    this.uno="";
    this.suma="";
    this.promedio= "";
    this.dos="";
  }

 Calcular(){
   
   this.suma =   (parseInt(''+this.uno) + parseInt(''+this.dos)).toString();
   this.promedio = ((parseInt(''+this.uno) + parseInt(''+this.dos) )/2).toString();
   
 }

}
