import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../clases/usuario';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario= new Usuario();
  constructor(private route:Router) { }

  ngOnInit(): void {
    this.usuario.nombre= "";
    this.usuario.clave="";

  }

  Ingresar(){
    console.log(this.usuario);
      if(this.usuario.nombre=="admin@mail.com" && this.usuario.clave=="1234"){
         this.route.navigate(['/']);
        console.log("work");
        

    }else{
        this.route.navigate(['error']);
      }
  }

}
