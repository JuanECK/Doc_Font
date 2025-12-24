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
            // console.log(data)
            if(data.status == 200){
                dataCookie = true;
            }else{
                dataCookie = false;
            }
            return {
                log:dataCookie,
                error:data.error
            }
        } catch (error) {
            // throw {log:false}
            throw new Error()
        }

    }

}