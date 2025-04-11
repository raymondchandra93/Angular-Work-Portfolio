import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,                             // Usually if we don't explicitly mention this, this is true already
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})

export class HeaderComponent {}