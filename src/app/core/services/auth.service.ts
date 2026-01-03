import { Injectable } from "@angular/core";

@Injectable({
    providedIn:'root'
})

export class AuthLoginService {

    async login( email:string, pass:string ){
        // console.log(email, pass)
        try {
            let dataCookie:boolean = true;
            const response = await fetch( 'http://localhost:3000/auth/login',{
                method:'POST',
                credentials:'include',
                headers:{
                    'Content-Type':'application/json'
                },
                body:JSON.stringify({
                    email:email,
                    pass:pass
                })
            })
            const data = await response.json();
            console.log(data)
            if(data.status == 200){
                return {
                    log:dataCookie = true,
                    data:{Id:data.data.Id, Nombre:data.data.Nombre},
                    error:data.error
                }
            }else{
                return {
                    log:dataCookie = false,
                    error:data.error
                }
            }

        } catch (error) {
            throw new Error()
        }

    }


    async isAutenticate(){
        let dataCookie:boolean = false;
        try {

            const response = await fetch( 'http://localhost:3000/auth/cookie',{
                method:'GET',
                credentials: 'include',
                headers: {
                    'Content-Type':'application/json'
                }
            } )
            const data = await response.json();
            // console.log(data)
            if( data.response === true ){
                dataCookie = true;
            }else{
                dataCookie = false;
            }

            return dataCookie;
            
        } catch (error) {
            throw new Error( JSON.stringify(error) )
        }


    }

}