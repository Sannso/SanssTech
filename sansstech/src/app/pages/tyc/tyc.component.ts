import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  selector: 'app-tyc',
  standalone: true,
  imports: [HeaderComponent, FooterComponent],
  templateUrl: './tyc.component.html',
  styleUrl: './tyc.component.scss'
})
export class TycComponent {

}
