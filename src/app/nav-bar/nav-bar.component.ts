import { Component } from '@angular/core';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { NavBarItem } from 'src/types/nav-bar-item';
import { Router, NavigationEnd } from '@angular/router'

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent {
  iconPrev = faAngleLeft;
  iconNext = faAngleRight;
  navItems: NavBarItem[] = [
    {
      label: 'О министерстве',
      rout: 'about',
    },
    {
      label: 'Структура',
      rout: 'structura',
    },
    {
      label: 'Подведомственные организации',
      rout: 'pv-organizations',
    },
  ];

  constructor(
    private router: Router,
    ) {
      router.events.subscribe((ev) => {
        if(ev instanceof NavigationEnd) this.handleUrlChange();
      })
  }

  private handleUrlChange() {
    //i hate query search but in angular references to html elements works like shit
    document.querySelectorAll('.nav-bar__item').forEach((item) => item.classList.remove('selected'));
    const selector = `${this.router.url.slice(1)}`;
    console.log(selector);
    document.getElementById(selector)?.classList.add('selected');
  }
}
