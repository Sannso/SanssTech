import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import { ToolbarModule } from 'primeng/toolbar';
import { CardModule } from 'primeng/card';

import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    ButtonModule,
    CommonModule,
    ToolbarModule,
    CardModule,
    FormsModule
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

}
