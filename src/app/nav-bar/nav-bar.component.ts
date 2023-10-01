import { Component } from '@angular/core';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { NavItemData } from 'src/types/nav-item-data';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent {
  iconPrev = faAngleLeft;
  iconNext = faAngleRight;
  selectedItem: NavItemData | undefined;
  navItems: NavItemData[] = [ //TODO: move to separate file
    {
      label: 'О министерстве',
      route: 'about',
    },
    {
      label: 'Структура',
      route: 'structura',
    },
    {
      label: 'Подведомственные организации',
      route: 'pv-organizations',
    },
  ];

  constructor(private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {// уж лучше так, чем бегать по DOM через квериселектор
        this.selectedItem = this.navItems.find((item) => item.route === event.url.split('/')[1]);
      }
    });
  }

}
