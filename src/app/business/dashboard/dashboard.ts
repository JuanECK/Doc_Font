import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { DashboardService } from '../../core/services/dashboard.service';

@Component({
  selector: 'app-dashboard',
  imports: [],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard implements OnInit{

  constructor(
    private dashService:DashboardService,
    private cdr: ChangeDetectorRef,
  ){}

  loginUser:string = 'Enrique Rivera';
  nombreEdicion:string = 'Usuario';
  dataInicial: Array<any>[] = [];

// dataInicial: Array<any>[] = [[
//   {noCliente:'Data tabla',Nombre:'Christhian Hernández Lira',tarjeta:'1254 7896 5412 3654',CLABE:'Christhian Hernández Lira',saldo:'$2,000,000.00'},
//   {noCliente:'Data tabla',Nombre:'Christhian Hernández Lira',tarjeta:'1254 7896 5412 3654',CLABE:'Christhian Hernández Lira',saldo:'$2,000,000.00'},
//   {noCliente:'Data tabla',Nombre:'Christhian Hernández Lira',tarjeta:'1254 7896 5412 3654',CLABE:'Christhian Hernández Lira',saldo:'$2,000,000.00'},
//   {noCliente:'Data tabla',Nombre:'Christhian Hernández Lira',tarjeta:'1254 7896 5412 3654',CLABE:'Christhian Hernández Lira',saldo:'$2,000,000.00'},
//   {noCliente:'Data tabla',Nombre:'Christhian Hernández Lira',tarjeta:'1254 7896 5412 3654',CLABE:'Christhian Hernández Lira',saldo:'$2,000,000.00'},
//   {noCliente:'Data tabla',Nombre:'Christhian Hernández Lira',tarjeta:'1254 7896 5412 3654',CLABE:'Christhian Hernández Lira',saldo:'$2,000,000.00'},
//   {noCliente:'Data tabla',Nombre:'Christhian Hernández Lira',tarjeta:'1254 7896 5412 3654',CLABE:'Christhian Hernández Lira',saldo:'$2,000,000.00'},
//   {noCliente:'Data tabla',Nombre:'Christhian Hernández Lira',tarjeta:'1254 7896 5412 3654',CLABE:'Christhian Hernández Lira',saldo:'$2,000,000.00'},
//   {noCliente:'Data tabla',Nombre:'Christhian Hernández Lira',tarjeta:'1254 7896 5412 3654',CLABE:'Christhian Hernández Lira',saldo:'$2,000,000.00'},
//   {noCliente:'Data tabla',Nombre:'Christhian Hernández Lira',tarjeta:'1254 7896 5412 3654',CLABE:'Christhian Hernández Lira',saldo:'$2,000,000.00'},
//   {noCliente:'Data tabla',Nombre:'Christhian Hernández Lira',tarjeta:'1254 7896 5412 3654',CLABE:'Christhian Hernández Lira',saldo:'$2,000,000.00'},
//   {noCliente:'Data tabla',Nombre:'Christhian Hernández Lira',tarjeta:'1254 7896 5412 3654',CLABE:'Christhian Hernández Lira',saldo:'$2,000,000.00'},
//   {noCliente:'Data tabla',Nombre:'Christhian Hernández Lira',tarjeta:'1254 7896 5412 3654',CLABE:'Christhian Hernández Lira',saldo:'$2,000,000.00'},
//   {noCliente:'Data tabla',Nombre:'Christhian Hernández Lira',tarjeta:'1254 7896 5412 3654',CLABE:'Christhian Hernández Lira',saldo:'$2,000,000.00'},
//   {noCliente:'Data tabla',Nombre:'Christhian Hernández Lira',tarjeta:'1254 7896 5412 3654',CLABE:'Christhian Hernández Lira',saldo:'$2,000,000.00'},
//   {noCliente:'Data tabla',Nombre:'Christhian Hernández Lira',tarjeta:'1254 7896 5412 3654',CLABE:'Christhian Hernández Lira',saldo:'$2,000,000.00'},
//   {noCliente:'Data tabla',Nombre:'Christhian Hernández Lira',tarjeta:'1254 7896 5412 3654',CLABE:'Christhian Hernández Lira',saldo:'$2,000,000.00'},
//   {noCliente:'Data tabla',Nombre:'Christhian Hernández Lira',tarjeta:'1254 7896 5412 3654',CLABE:'Christhian Hernández Lira',saldo:'$2,000,000.00'},
//   {noCliente:'Data tabla',Nombre:'Christhian Hernández Lira',tarjeta:'1254 7896 5412 3654',CLABE:'Christhian Hernández Lira',saldo:'$2,000,000.00'},
//   {noCliente:'Data tabla',Nombre:'Christhian Hernández Lira',tarjeta:'1254 7896 5412 3654',CLABE:'Christhian Hernández Lira',saldo:'$2,000,000.00'},
//   {noCliente:'Data tabla',Nombre:'Christhian Hernández Lira',tarjeta:'1254 7896 5412 3654',CLABE:'Christhian Hernández Lira',saldo:'$2,000,000.00'},
//   {noCliente:'Data tabla',Nombre:'Christhian Hernández Lira',tarjeta:'1254 7896 5412 3654',CLABE:'Christhian Hernández Lira',saldo:'$2,000,000.00'},
//   {noCliente:'Data tabla',Nombre:'Christhian Hernández Lira',tarjeta:'1254 7896 5412 3654',CLABE:'Christhian Hernández Lira',saldo:'$2,000,000.00'},
//   {noCliente:'Data tabla',Nombre:'Christhian Hernández Lira',tarjeta:'1254 7896 5412 3654',CLABE:'Christhian Hernández Lira',saldo:'$2,000,000.00'},
//   {noCliente:'Data tabla',Nombre:'Christhian Hernández Lira',tarjeta:'1254 7896 5412 3654',CLABE:'Christhian Hernández Lira',saldo:'$2,000,000.00'},
//   {noCliente:'Data tabla',Nombre:'Christhian Hernández Lira',tarjeta:'1254 7896 5412 3654',CLABE:'Christhian Hernández Lira',saldo:'$2,000,000.00'},
//   {noCliente:'Data tabla',Nombre:'Christhian Hernández Lira',tarjeta:'1254 7896 5412 3654',CLABE:'Christhian Hernández Lira',saldo:'$2,000,000.00'},
//   {noCliente:'Data tabla',Nombre:'Christhian Hernández Lira',tarjeta:'1254 7896 5412 3654',CLABE:'Christhian Hernández Lira',saldo:'$2,000,000.00'},
//   {noCliente:'Data tabla',Nombre:'Christhian Hernández Lira',tarjeta:'1254 7896 5412 3654',CLABE:'Christhian Hernández Lira',saldo:'$2,000,000.00'},
//   {noCliente:'Data tabla',Nombre:'Christhian Hernández Lira',tarjeta:'1254 7896 5412 3654',CLABE:'Christhian Hernández Lira',saldo:'$2,000,000.00'},
//   {noCliente:'Data tabla',Nombre:'Christhian Hernández Lira',tarjeta:'1254 7896 5412 3654',CLABE:'Christhian Hernández Lira',saldo:'$2,000,000.00'},
//   {noCliente:'Data tabla',Nombre:'Christhian Hernández Lira',tarjeta:'1254 7896 5412 3654',CLABE:'Christhian Hernández Lira',saldo:'$2,000,000.00'},
//   {noCliente:'Data tabla',Nombre:'Christhian Hernández Lira',tarjeta:'1254 7896 5412 3654',CLABE:'Christhian Hernández Lira',saldo:'$2,000,000.00'},
//   {noCliente:'Data tabla',Nombre:'Christhian Hernández Lira',tarjeta:'1254 7896 5412 3654',CLABE:'Christhian Hernández Lira',saldo:'$2,000,000.00'},
// ]
// ];
dataEditable: Array<any>[] = [[
  {noCliente:'Data tabla',Nombre:'Christhian Hernández Lira',tarjeta:'1254 7896 5412 3654',CLABE:'Christhian Hernández Lira',saldo:'$2,000,000.00'},
]]

ngOnInit(): void {
  let nombre = localStorage.getItem('sesion')
  const { Id, Nombre } = JSON.parse(nombre!)
  this.loginUser = Nombre

  this.getDataInicio();
  
}


async getDataInicio() {

    const response = await this.dashService.getDataInicialTable();
    this.dataInicial.push(response.data);

    this.cdr.detectChanges();
    // console.log(this.dataInicial)
  
}

async cargaUsuarioSeleccionado( id:number ){
  const response = await this.dashService.getDataUserSelect( id );
}

}

