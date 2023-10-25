import { Component, Input} from '@angular/core';
import { NavItemData } from 'src/types/nav-item-data';

@Component({
  selector: 'app-nav-bar-item',
  templateUrl: './nav-bar-item.component.html',
  styleUrls: ['./nav-bar-item.component.scss']
})
export class NavBarItemComponent {
  @Input() data: NavItemData | undefined;
  @Input() selected: boolean | undefined;
}
