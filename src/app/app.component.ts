import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {FormsModule} from '@angular/forms';
// import  {ngModel} from '@angular/forms';
import {AboutComponent} from './about/about.component'
import { ContactComponent } from "./contact/contact.component";
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule, AboutComponent, ContactComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  // title = 'sv7_todo';
  name = null
  age = null
}
