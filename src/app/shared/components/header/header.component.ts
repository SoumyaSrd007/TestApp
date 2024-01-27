import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  onSidebarToggle() {
    const $wrapper: any = document.querySelector('#wrapper');
    $wrapper.classList.toggle('toggled');
  }
}
