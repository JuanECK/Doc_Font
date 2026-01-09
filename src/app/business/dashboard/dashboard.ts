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

  loginUser:string = '';
  dataInicial: Array<any>[] = [];
  dataEditable: Array<any>[] = [];
  edicion:boolean = true;

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
}

async cargaUsuarioSeleccionado( id:number ){
  const response = await this.dashService.getDataUserSelect( id );
  this.dataEditable.push(response.data);
  this.cdr.detectChanges();
}

edicionActivo(){
    this.edicion = false
}
edicionInactivo(){
   this.edicion = true
}

}

