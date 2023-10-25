import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { NavItemData } from 'src/types/nav-item-data';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements AfterViewInit {
  @ViewChild('navListElem') navList: ElementRef<HTMLDivElement> | undefined;
  @ViewChild('navListWrapper') navListWrapper: ElementRef<HTMLDivElement> | undefined;
  @ViewChild('prevBtn') prevBtn: ElementRef<HTMLButtonElement> | undefined;
  @ViewChild('nextBtn') nextBtn: ElementRef<HTMLButtonElement> | undefined;
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
      route: 'suborgs',
    },
    {
      label: 'Образовательные учереждения',
      route: 'ed-establisments'
    },
    {
      label: 'Информационные системы',
      route: 'it-systems'
    },
    {
      label: 'Вакансии',
      route: 'jobs'
    },
    {
      label: 'Кадровый резерв',
      route: 'rezerv'
    },
    {
      label: 'Открытые данные',
      route: 'opendata'
    },
    {
      label:'Планы информатизации',
      route: '4563'
    },
    {
      label: 'Обеспечение безопасности',
      route: '1254'
    },
    {
      label: 'Контакты и реквизиты',
      route: 'contacs'
    }
  ];
  private sliderPos = 0;
  private maxSliderPos = 0;
  private sliderStep = 0;

  constructor(private router: Router) {
    this.selectedItem = this.navItems[0];
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {// уж лучше так, чем бегать по DOM через квериселектор
        const url = event.url.split('/')[1];

        this.selectedItem = url ? this.navItems.find((item) => item.route === url) : this.navItems[0];
      }
    });
  }

  ngAfterViewInit(): void {
    this.calculateStep();
    this.handleSliderChanges();
    window.addEventListener('resize', () => {
      this.sliderPos = 0;
      this.handleSliderChanges();
    })
  }

  private calculateStep(): void {
    if(this.navList && this.navListWrapper) {
      this.sliderStep = Math.ceil((this.navList?.nativeElement.scrollWidth - this.navListWrapper.nativeElement.offsetWidth) / this.navItems.length);
      this.maxSliderPos = this.navItems.length;
    }
  }

  handleNextClick() {
    if (this.sliderPos < this.maxSliderPos) {
      this.sliderPos += 1;
      this.handleSliderChanges();
    }
  }

  handlePrevClick() {
    if (this.sliderPos > 0) {
      this.sliderPos -= 1;
      this.handleSliderChanges();
    }
  }

  private handleSliderChanges() {
    if (this.navList) {
      this.navList.nativeElement.style.transform = `translateX(-${this.sliderPos * this.sliderStep}px)`;
    }
    if(this.sliderPos > 0 && this.prevBtn) {
      this.prevBtn.nativeElement.classList.add('active-btn')
    }
    if(this.sliderPos < this.maxSliderPos && this.nextBtn) {
      this.nextBtn.nativeElement.classList.add('active-btn')
    }
    if(this.sliderPos === 0 && this.prevBtn) {
      this.prevBtn.nativeElement.classList.remove('active-btn')
    }
    if(this.sliderPos === this.maxSliderPos && this.nextBtn) {
      this.nextBtn.nativeElement.classList.remove('active-btn')
    }
  }
}
