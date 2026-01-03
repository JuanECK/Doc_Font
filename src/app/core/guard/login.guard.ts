import { Injectable } from "@angular/core";
import { AuthLoginService } from "../services/auth.service";
import { Router } from "@angular/router";

@Injectable({
    providedIn: 'root',
})

export class LoginGuardService {

    constructor(
        private authService: AuthLoginService,
        private router: Router
    ){}

    private valorRetorno: boolean = false;

    canActivate(): Promise<boolean> | boolean {

        return this.authService.isAutenticate().then( data => {

            this.valorRetorno = data;

            if( this.valorRetorno ){

                return true;
            }else{
                this.router.navigateByUrl('/login');
                return false;
            }

        } )

    }

}