import { Component, computed, signal } from '@angular/core';
import { SIDE_MENU_ITEM } from './@models/_side-model';
import { MENU_ITEM } from './@shared/_side-menu';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  
  title = 'Satika';
  Heading:string=''
 menuItem = signal<SIDE_MENU_ITEM[]>(MENU_ITEM)
  collapsed = signal(false)
  sideNaveWidth = computed(()=>this.collapsed()?'70px':'200px')
  Breadcrum(item:string){
    this.Heading = item;
  }
}
