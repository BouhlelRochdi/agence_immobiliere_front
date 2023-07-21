import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../../containers/navbar/navbar.component';

@Component({
  selector: 'app-change-password',
  standalone: true,
  imports: [CommonModule, NavbarComponent],
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent {

}
