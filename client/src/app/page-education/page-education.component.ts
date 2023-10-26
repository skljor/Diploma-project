import { Component } from '@angular/core';
import { Education } from '../../../../server/src/types/education';
import { EducationService } from '../education.service';
import { EducationSearchParams } from 'src/types/education-search-params';
import { faPhone, faEnvelope, faPhoneVolume } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-page-education',
  templateUrl: './page-education.component.html',
  styleUrls: ['./page-education.component.scss']
})
export class PageEducationComponent {
  phoneIcon = faPhone
  mailIcon = faEnvelope;
  stPhoneIcon = faPhoneVolume;
  private educations: Education[] | undefined;
  private searchParams: EducationSearchParams = {};
  filteredEducations: Education[] | undefined;
  selectedPage = 1;
  itemsPerPage = 4;

  constructor(
    private educationService: EducationService
  ) {
    educationService.getEducatons().subscribe((data) => { 
      this.educations = data;
      this.filterEducations();
    });
    
  }

  searchSubmit(orgName: string, headName: string) {
    this.searchParams.name = orgName.length > 0 ? orgName : undefined;
    this.searchParams.headName = headName.length > 0 ? headName : undefined;
    this.filterEducations();
  }

  resetSearch() {
    this.searchParams = {};
    this.filteredEducations = this.educations;
  }

  private filterEducations() {
    const filterKeys = Object.keys(this.searchParams);
    this.filteredEducations = filterKeys.length === 0 ? this.educations :                 
    this.educations?.filter((org) => filterKeys.every((key) => this.searchParams[key] === undefined || this.compareSearchValue(org[key] as string, this.searchParams[key] as string)));
  }

  private compareSearchValue(based: string, searched: string): boolean {
    const basedLowered = based.toLowerCase();
    const searchedLowered = searched.toLowerCase();
    return basedLowered === searchedLowered || basedLowered.startsWith(searchedLowered) || !!basedLowered.split(' ').find((sliced) => sliced.startsWith(searchedLowered) || sliced.endsWith(searchedLowered));
  }

  getPagedEducations() {
    if (this.filteredEducations?.length === 0) {
      return [];
    }
    return this.selectedPage === 1 ? 
    this.filteredEducations?.slice(0, this.itemsPerPage) : 
    this.filteredEducations?.slice(this.itemsPerPage * (this.selectedPage - 1),
      (this.itemsPerPage * this.selectedPage) > this.filteredEducations.length ? this.filteredEducations.length : this.itemsPerPage * this.selectedPage
    );
  }
}
