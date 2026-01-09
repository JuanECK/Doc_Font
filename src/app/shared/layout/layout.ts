import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Sidebar } from '../sidebar/sidebar';
import { AuthLoginService } from '../../core/services/auth.service';

@Component({
  selector: 'app-layout',
  imports: [Sidebar, RouterOutlet],
  templateUrl: './layout.html',
  styleUrl: './layout.css',
})
export class Layout {

    constructor(
      private authUser: AuthLoginService,
    ){
  
    }

  LogOut(): void{
    // console.log('logout')
  this.authUser.logOut();
  }

}
