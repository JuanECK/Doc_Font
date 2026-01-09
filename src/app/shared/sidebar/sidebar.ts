import { AfterViewInit, Component, ElementRef, OnInit, ViewChildren } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterLinkActive, RouterLinkWithHref } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  imports: [RouterLinkActive, RouterLinkWithHref, ReactiveFormsModule],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css',
})
export class Sidebar implements OnInit, AfterViewInit {

  
  @ViewChildren('toggle1',{ read: ElementRef}) items!:any;
  // @ViewChild('onceCapital') onceCapital!:ElementRef;
  
  ngOnInit(): void {
    
    
  }
  
  ngAfterViewInit(): void {

    setTimeout(()=>{
      this.revisa()
    },(100))

  }

  
  revisa() {
    this.items.forEach((elRef: ElementRef, index: number) => {
      elRef.nativeElement.childNodes.forEach( (elemento:any, index:number) => {
        let elementoClassList = elemento.lastElementChild.lastElementChild.lastElementChild.classList.contains('link-Active')
        if( elementoClassList == true ){
          // elemento.parentNode.parentNode.firstChild.lastElementChild.lastElementChild.classList.add('menuDesplegadoActivo')
          elemento.parentNode.parentNode.firstChild.lastElementChild.lastElementChild.lastElementChild.classList.add('rotar')
        elemento.parentNode.parentNode.lastChild.classList.remove('dropdown-menu-toggle')
        elemento.parentNode.parentNode.lastChild.classList.add('dropdown-menu-toggle-active')
        return
      }
    } )
    });
  }

  desactivarLink(number:number) {

      this.items.forEach((elRef: ElementRef, index: number) => {
        elRef.nativeElement.childNodes.forEach( (elemento:any, index:number) => {
          let elementoClassList = elemento.lastElementChild.lastElementChild.lastElementChild.classList.contains('link-Active')
          
          if( elementoClassList == true ){
            let elementos = [...elemento.parentNode.parentNode.parentNode.parentNode.childNodes]
            elementos.splice(number,1)
            let elementosActivos = elementos.slice(2, elementos.length)
            // console.log(elementosActivos)
            elementosActivos.forEach( (elementosLink:any, index:number) => {
              // elementosLink.lastElementChild.firstChild.lastElementChild.lastElementChild.classList.remove('menuDesplegadoActivo')
              elementosLink.lastElementChild.firstChild.lastElementChild.lastElementChild.lastElementChild.classList.remove('rotar')
              elementosLink.lastElementChild.lastChild.classList.remove('dropdown-menu-toggle-active')
              elementosLink.lastElementChild.lastChild.classList.add('dropdown-menu-toggle')
            } )
            return
          }
      } )
      });
  }

  clicEventMenu (event:any) {
    event.preventDefault();
    if(event.target.id == 'img'){
      // event.target.parentNode?.parentElement.firstChild.classList.toggle('menuDesplegadoActivo')
      event.target.parentNode?.parentElement.firstChild.lastChild.classList.toggle('rotar')
      event.target.parentNode?.parentElement.parentElement.parentElement.lastChild.classList.toggle('dropdown-menu-toggle')
      return
    }

    let parent = event.target.parentNode?.parentElement?.parentElement

    parent.lastChild.classList.toggle('dropdown-menu-toggle')
    parent.lastChild.classList.toggle('dropdown-menu-toggle-active')

    if( parent.lastChild.classList.contains('dropdown-menu-toggle') ){
      // parent.firstChild.firstChild.firstChild.classList.remove('menuDesplegadoActivo');
      parent.firstChild.firstChild.firstChild.lastChild.classList.remove('rotar');
      // console.log(parent.firstChild.firstChild.firstChild.lastChild)
    }else{
      // parent.firstChild.firstChild.firstChild.classList.add('menuDesplegadoActivo');
      parent.firstChild.firstChild.firstChild.lastChild.classList.add('rotar');
    }
  }

  linkActivo ( event:any ) {
  
    let padreElementos = [...event.target.parentNode?.parentNode?.parentNode?.parentNode?.parentNode.childNodes]
    let elementosActivos = padreElementos.slice(2, padreElementos.length)

    elementosActivos.forEach( (elementos:any, index:number) => {
      // elementos.lastElementChild.childNodes[0].lastElementChild.lastElementChild.classList.remove('menuDesplegadoActivo')
      elementos.lastElementChild.childNodes[0].lastElementChild.lastElementChild.lastElementChild.classList.remove('rotar')
    } )

    this.items.forEach((elRef: any, index: number) => {
      if(elRef.nativeElement.classList.contains('dropdown-menu-toggle') == false){
        elRef.nativeElement.classList.remove('dropdown-menu-toggle-active')
        elRef.nativeElement.classList.add('dropdown-menu-toggle')
        
      }
    });

  }

}

