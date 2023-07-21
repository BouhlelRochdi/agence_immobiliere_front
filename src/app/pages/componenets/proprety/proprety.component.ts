import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../../containers/navbar/navbar.component';

@Component({
  selector: 'app-proprety',
  standalone: true,
  imports: [CommonModule, NavbarComponent],
  templateUrl: './proprety.component.html',
  styleUrls: ['./proprety.component.scss']
})
export class PropretyComponent {

}
