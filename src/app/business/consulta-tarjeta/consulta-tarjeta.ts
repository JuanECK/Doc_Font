import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-consulta-tarjeta',
  imports: [],
  templateUrl: './consulta-tarjeta.html',
  styleUrl: './consulta-tarjeta.css',
})
export class ConsultaTarjeta implements OnInit {

  constructor(

  ){
  }

  loginUser:string = '';

  ngOnInit(): void {
  let nombre = localStorage.getItem('sesion')
  const { Id, Nombre } = JSON.parse(nombre!)
  this.loginUser = Nombre
  
  }

}
