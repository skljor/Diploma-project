import { Component } from '@angular/core';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent {
  iconPrev = faAngleLeft;
  iconNext = faAngleRight;
  navItems = [
    'О министерстве', 'Структура', 'Подведомственные организации', 'Образовательные учереждения', 'Информационные системы'
  ];
}
