import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ContainerLayoutComponent } from "./components/container-layout/container-layout.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ContainerLayoutComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'GraphQLTestUI';
}
