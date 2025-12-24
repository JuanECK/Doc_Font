import { Component, ElementRef, signal, ViewChild } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthLoginService } from '../../../app/core/services/auth.service'

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
constructor(
    private AuthLoginService: AuthLoginService,
    // private cdr:ChangeDetectorRef,
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
    // this.cdr.detectChanges();
  }

  login():Promise<boolean> | boolean {

    const email = this.credenciales().get('email')?.value;
    const pass = this.credenciales().get('pass')?.value;
    // this.errorResp = ''
    // this.errorPass = true;

    return this.AuthLoginService.login(email , pass).then( value => {
      this.user = value!.log
      if( this.user ){
        console.log('aqui')
        return true
      }else{
        // this.errorResp = 'errorrrr'
        // this.RespuestaError = value.error
        this.errorPass = false;
        setTimeout(()=>{
          this.respHerror.nativeElement.innerHTML = value.error
          console.log('this ',value.error)
        },100)
        // this.ver(value.error)

        // this.credenciales().reset({
        //   'email':'',
        //   'pass':''
        // })
        // this.cdr.detectChanges();
        return false
      }
    })
  }

  MensajeError(){
    if(this.errorPass == false){
      this.errorPass = true;
      this.respHerror.nativeElement.innerHTML = ''
      // setTimeout(()=>{
      //   this.RespuestaError = ''
      // },100)
      // this.credenciales().reset({
      //   'email':'',
      //   'pass':''
      // })
    }
    // this.cdr.detectChanges();
  }
  
  ver( error:string ){
    // setTimeout(()=>{
    //   this.errorResp = 'problemasss'
    // },100)
    // console.log(this.RespuestaError)
    this.respHerror.nativeElement.innerHTML = error
    this.prueba = error
    console.log(this.prueba)
    // this.cdr.detectChanges();
  }
}
