import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MainComponentComponent } from "./main-component/main-component.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MainComponentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'profile';
}
