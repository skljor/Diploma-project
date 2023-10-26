import { Component } from '@angular/core';
import { Education } from '../../../../server/src/types/education';

@Component({
  selector: 'app-page-education',
  templateUrl: './page-education.component.html',
  styleUrls: ['./page-education.component.scss']
})
export class PageEducationComponent {
  private educations: Education[] | undefined;
  filteredEducations: Education[] | undefined;
  selectedPagPage = 1;
  private itemsPerPage = 4;

}
