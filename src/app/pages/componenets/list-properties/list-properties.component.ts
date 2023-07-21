import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../../containers/navbar/navbar.component';

@Component({
  selector: 'app-list-properties',
  standalone: true,
  imports: [CommonModule, NavbarComponent],
  templateUrl: './list-properties.component.html',
  styleUrls: ['./list-properties.component.scss']
})
export class ListPropertiesComponent {

}
