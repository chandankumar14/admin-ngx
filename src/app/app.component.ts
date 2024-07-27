import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'admin-ngx';
  loggedId: boolean = true;
  collapsed = signal(false);
  sideNaveWidth = computed(() => (this.collapsed() ? '70px' : '210px'));
}
