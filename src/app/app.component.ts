import { Component } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './layouts/header.component';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    HomeComponent,
    HeaderComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent {}
