import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'admin-ngx';


  Heading:string=''
  loggedId: boolean = true
  menuItem = signal<MENU_ITEM[]>(sideMenu)
  collapsed = signal(false)
  sideNaveWidth = computed(()=>this.collapsed()?'70px':'210px')
  Breadcrum(item:string){
    this.Heading = item;
  }
}
