import { Component } from '@angular/core';
import { SuborgsService } from '../suborgs.service';
import { faPhone, faEnvelope, faPhoneVolume } from '@fortawesome/free-solid-svg-icons';
import { SubOrg} from '../../../../server/src/types/sub-org';
import { SuborgsSearchParams } from 'src/types/suborgs-search-params';
import { SuborgsObserver } from 'src/types/suborgs-observer';

@Component({
  selector: 'app-page-suborgs',
  templateUrl: './page-suborgs.component.html',
  styleUrls: ['./page-suborgs.component.scss']
})
export class PageSuborgsComponent implements SuborgsObserver {
  phoneIcon = faPhone
  mailIcon = faEnvelope;
  stPhoneIcon = faPhoneVolume;
  private suborgs: SubOrg[] | undefined;
  filteredSuborgs: SubOrg[] | undefined;
  searchParams: SuborgsSearchParams = {};
  private itemsPerPage = 4;
  selectedPage = 1;

  constructor(
    private suborgsService: SuborgsService
  ) {
    suborgsService.subscribe(this);
   }

  listenSuborgsUpdate(suborgs: SubOrg[]): void {
    this.suborgs = suborgs;
    this.filterSuborgs();
  }

  searchSubmit(orgName: string, headName: string) {
    this.searchParams.name = orgName.length > 0 ? orgName : undefined;
    this.searchParams.headName = headName.length > 0 ? headName : undefined;
    this.filterSuborgs();
  }

  resetSearch() {
    this.searchParams = {};
    this.filteredSuborgs = this.suborgs;
  }
  //по приколу сделаю фильтер на клиенте, пускай бабки с кордвадуо терпят
  private filterSuborgs() {
    const filterKeys = Object.keys(this.searchParams);
    this.filteredSuborgs = filterKeys.length === 0 ? this.suborgs :                 
    this.suborgs?.filter((org) => filterKeys.every((key) => this.searchParams[key] === undefined || this.compareSearchValue(org[key] as string, this.searchParams[key] as string)));
  }

  private compareSearchValue(based: string, searched: string): boolean {
    const basedLowered = based.toLowerCase();
    const searchedLowered = searched.toLowerCase();
    return basedLowered === searchedLowered || basedLowered.startsWith(searchedLowered) || !!basedLowered.split(' ').find((sliced) => sliced.startsWith(searchedLowered) || sliced.endsWith(searchedLowered));
  }

  getPagCounts(): Set<number> {
    return this.filteredSuborgs ? this.createPagSet(this.filteredSuborgs.length) : new Set([1]);
  }

  private createPagSet(total: number): Set<number> {
    const set: Set<number> = new Set();
    for (let num = 1; num <= Math.ceil(total / this.itemsPerPage); num ++) {
      set.add(num);
    }
    return set;
  }
  
  handlePagClick(num: number) {
    this.selectedPage = num;
  }

  getPagedSubrogs() {
    if (this.filteredSuborgs?.length === 0) {
      return [];
    }
    return this.selectedPage === 1 ? //экскьюз муар за трехэтажный тернарник, я просто люблю тернарники
    this.filteredSuborgs?.slice(0, this.itemsPerPage) : 
    this.filteredSuborgs?.slice(this.itemsPerPage * (this.selectedPage - 1),
      (this.itemsPerPage * this.selectedPage) > this.filteredSuborgs.length ? this.filteredSuborgs.length : this.itemsPerPage * this.selectedPage
    );
  }
}
