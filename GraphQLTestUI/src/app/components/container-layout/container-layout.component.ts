import { Component } from '@angular/core';
import { NavigationComponent } from "../navigation/navigation.component";

@Component({
  selector: 'app-container-layout',
  standalone: true,
  imports: [NavigationComponent],
  templateUrl: './container-layout.component.html',
  styleUrl: './container-layout.component.css'
})
export class ContainerLayoutComponent {

}
