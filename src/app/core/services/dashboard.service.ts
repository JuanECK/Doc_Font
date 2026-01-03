import { Injectable } from "@angular/core";
import { environment } from "../../../environments/environments";


@Injectable({
    providedIn:'root'
})

export class DashboardService {

    private _http:string = `${environment.apiUrl}`

   async getDataInicialTable() {

    const response = await fetch( this._http + 'dashboard/getDataInitialTable', {
        method:'GET',
        // credentials:'include',
        headers:{
            'Content-Type':'application/json'
        }
    } );
    const data = await response.json();
    // console.log(data)
    if( data.status == 200 ){
        return data
    }
    return []
   };

   async getDataUserSelect( id:number ) {
    
    const response = await fetch ( this._http + 'dashboard/getDataUserSelect',{
        method:'POST',
        headers:{
             'Content-Type':'application/json'
        },
        body: JSON.stringify({id:id})
    });
    const data = await response.json();
    console.log(data)
    return data

   }

}