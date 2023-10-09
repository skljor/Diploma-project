import { Component, OnInit } from '@angular/core';
import { StructuresService } from '../structures.service';
import { EmployesService } from '../employes.service';
import { Structures } from '../../../../server/src/types/structures';
import { Employ } from '../../../../server/src/types/employ';
import { EmployQueryParams } from 'src/types/employ-query-params';
import { faRedo } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-page-structura',
  templateUrl: './page-structura.component.html',
  styleUrls: ['./page-structura.component.scss']
})
export class PageStructuraComponent implements OnInit {

  structures: Structures | undefined;
  employes: Employ[] | undefined;
  resetIcon = faRedo;
  employIcon = faUser;
  selectedPagPage = 1;
  private itemsPerPage = 6;
  searchParams: EmployQueryParams = {};


  constructor (
    private structuresService: StructuresService,
    private employesService: EmployesService,
    ) { }

  ngOnInit(): void {
    this.structuresService.fetchData().subscribe((data) => {
      this.structures = data;
    });
    this.getEmployes();
  }

  getStructureNameByCode(code: string) {
    return this.structures?.find((structure) => structure.code === code)?.title;
  }

  selectAll() {
    this.searchParams.structureCode = undefined;
    this.getEmployes();
  }

  selectStructure(strucureCode: string) {
    this.searchParams.structureCode = strucureCode;
    this.getEmployes(this.searchParams);
    this.selectedPagPage = 1;

  }

  searchSubmit(event: Event, secondName: HTMLInputElement, jobTitle: HTMLInputElement) {
    event.preventDefault();
    this.searchParams.secondname = secondName.value.length > 0 ? secondName.value : undefined;
    this.searchParams.jobTitle = jobTitle.value.length > 0 ? jobTitle.value : undefined;
    this.getEmployes(this.searchParams);
    this.selectedPagPage = 1;

  }

  private getEmployes(queryParams?: EmployQueryParams) {
    //  TODO: использовать observable по человечески с подпиской единожды при инициализации  и дальнейшем уведомлении об изменениях
    if (queryParams) {
      const queryString = Object.keys(queryParams).filter((key) => !!queryParams[key]).reduce((acc, item, index, arr) => {
        return index < (arr.length - 1) ? `${acc}${item}=${queryParams[item]}&` : `${acc}${item}=${queryParams[item]}`
      }, '');
      console.log(queryString);
      this.employesService.getEmploys(queryString).subscribe((data) => {
        this.employes = data;
      });
    } else {
      this.employesService.getEmploys().subscribe((data) => {
        this.employes = data;
      });
    }
  }

  getPagCounts(): Set<number> {
    return this.employes ? this.createPagSet(this.employes.length) : new Set([0]);
  }

  private createPagSet(total: number): Set<number> {
    const set: Set<number> = new Set();
    for (let num = 1; num <= Math.ceil(total / this.itemsPerPage); num ++) {
      set.add(num);
    }
    return set;
  }

  getPagedEmployes() {
    if (this.employes?.length === 0) {
      return [];
    }
    return this.selectedPagPage === 1 ? //экскьюз муар за трехэтажный тернарник, я просто люблю тернарники
    this.employes?.slice(0, this.itemsPerPage) : 
    this.employes?.slice(this.itemsPerPage * (this.selectedPagPage - 1),
      (this.itemsPerPage * this.selectedPagPage) > this.employes.length ? this.employes.length : this.itemsPerPage * this.selectedPagPage
    );
  }

  handlePagClick(pageNum: number) {
    this.selectedPagPage = pageNum;
  }

  resetForm(secondName: HTMLInputElement, jobTitle: HTMLInputElement) {
    secondName.value = '';
    jobTitle.value = '';
  }
}
