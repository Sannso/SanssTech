import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import { ToolbarModule } from 'primeng/toolbar';
import { CardModule } from 'primeng/card';
import { MenuItem } from 'primeng/api';
import { TieredMenuModule } from 'primeng/tieredmenu';
import { BreakpointObserver, BreakpointState, LayoutModule } from '@angular/cdk/layout';

import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    ButtonModule,
    CommonModule,
    ToolbarModule,
    CardModule,
    FormsModule,
    TieredMenuModule,
    LayoutModule,
    RouterLink
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  items: MenuItem[] | undefined;
  isMobileView:boolean = false;
  mql = window.matchMedia('(max-width: 800px)');

  constructor(public breakpointObserver: BreakpointObserver){
    this.items = [
      {
          label: 'OtherOption',
          icon: 'pi pi-file-edit'
      },
      {
          label: 'Contacto',
          icon: 'pi pi-user'
      },
      {
          separator: true
      },
      {
          label: 'Ingresar',
          icon: 'pi pi-sign-in'
      }
    ]
  }

  ngOnInit(): void {
    let mobileView = this.mql.matches;

    this.isMobileView = mobileView;
    
    this.breakpointObserver
    .observe(['(max-width: 1000px)'])
    .subscribe((state: BreakpointState) => {
      if (state.matches) {
        this.isMobileView = true;
      } else {
        this.isMobileView = false;
      }
    });
      
  }
}
