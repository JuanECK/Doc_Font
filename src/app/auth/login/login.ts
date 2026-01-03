import { Component, ElementRef, signal, ViewChild } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthLoginService } from '../../../app/core/services/auth.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
constructor(
    private AuthLoginService: AuthLoginService,
    private router:Router,
  ){}

  @ViewChild('respHerror') respHerror!:ElementRef;

  private user: boolean = false;
  errorPass: boolean = true;
  RespuestaError:string = '';
  prueba:string = '';

  credenciales = signal<FormGroup>(
    new FormGroup({
      email: new FormControl('',[Validators.required]),
      pass: new FormControl('',[Validators.required]),
    })
  )

  ngOnInit(): void {

    this.isLoggin()

  }

  async isLoggin():Promise<boolean> {

    return await this.AuthLoginService.isAutenticate().then( auth => {

      if( auth ){

        this.router.navigate(['/']);
        return true;

      }else{
        return false;
      }

    } )

  }

  login():Promise<boolean> | boolean {

    const email = this.credenciales().get('email')?.value;
    const pass = this.credenciales().get('pass')?.value;

    return this.AuthLoginService.login(email , pass).then( value => {
      this.user = value!.log
      if( this.user ){
        console.log('genial todo bien')
        localStorage.setItem('sesion', JSON.stringify(value.data))
        this.router.navigate(['/']);
        return true
      }else{
        console.log('Na error')
        this.errorPass = false;
        this.respHerror.nativeElement.innerHTML = value.error
        return false
      }
    })
  }

  MensajeError(){
    if(this.errorPass == false){
      this.errorPass = true;
      this.respHerror.nativeElement.innerHTML = ''
      // this.credenciales().reset({
      //   'email':'',
      //   'pass':''
      // })
    }

  }
  
  ver( error:string ){

  }
}
