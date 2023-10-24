import { Component, OnInit } from '@angular/core';
import { StructuresService } from '../structures.service';
import { EmployesService } from '../employes.service';
import { Structures } from '../../../../server/src/types/structures';
import { Employee } from '../../../../server/src/types/employee';
import { EmployQueryParams } from 'src/types/employ-query-params';
import { faRedo } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { StructuresObserver } from 'src/types/structures-observer';

@Component({
  selector: 'app-page-structura',
  templateUrl: './page-structura.component.html',
  styleUrls: ['./page-structura.component.scss']
})
export class PageStructuraComponent implements OnInit, StructuresObserver {

  structures: Structures | undefined;
  private employees: Employee[] | undefined;
  filteredEmployees: Employee[] | undefined;
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
    this.structuresService.subscribe(this);
    this.employesService.getEmployees().subscribe((data) => {
      this.employees = data;
      this.selectAll();
    });
  }

  getStructureNameByCode(code: string) {
    return this.structures?.find((structure) => structure.code === code)?.title;
  }

  selectAll() {
    this.searchParams = {};
    this.filteredEmployees = this.employees;
  }

  selectStructure(strucureCode: string) {
    this.searchParams.structureCode = strucureCode;
    this.selectedPagPage = 1;
    this.selectBySearchParams();
  }

  searchSubmit(event: Event, secondName: HTMLInputElement, jobTitle: HTMLInputElement) {
    event.preventDefault();
    this.searchParams.lastName = secondName.value.length > 0 ? secondName.value : undefined;
    this.searchParams.jobTitle = jobTitle.value.length > 0 ? jobTitle.value : undefined;
    this.selectedPagPage = 1;
    this.selectBySearchParams();
  }

  selectBySearchParams() {
    const searchKeys = Object.keys(this.searchParams).filter((key) => this.searchParams[key]);
    this.filteredEmployees = this.employees?.filter(
      (employee) => searchKeys.every((key) => {
            //  using 'as string' cuz in code above possibly undefined values was filtered
        return (employee[key] as string).toLowerCase().startsWith(this.searchParams[key]?.toLowerCase() as string)
        ||  
        (this.searchParams[key]?.toLowerCase() === (employee[key] as string).toLowerCase())
        || (employee[key] as string).toLowerCase().split(' ').find((str) => str.startsWith(this.searchParams[key]?.toLowerCase() as string))
      })
    );
  }

  getPagCounts(): Set<number> {
    return this.filteredEmployees ? this.createPagSet(this.filteredEmployees.length) : new Set([1]);
  }

  private createPagSet(total: number): Set<number> {
    const set: Set<number> = new Set();
    for (let num = 1; num <= Math.ceil(total / this.itemsPerPage); num ++) {
      set.add(num);
    }
    return set;
  }

  getPagedEmployes() {
    if (this.filteredEmployees?.length === 0) {
      return [];
    }
    return this.selectedPagPage === 1 ? //экскьюз муар за трехэтажный тернарник, я просто люблю тернарники
    this.filteredEmployees?.slice(0, this.itemsPerPage) : 
    this.filteredEmployees?.slice(this.itemsPerPage * (this.selectedPagPage - 1),
      (this.itemsPerPage * this.selectedPagPage) > this.filteredEmployees.length ? this.filteredEmployees.length : this.itemsPerPage * this.selectedPagPage
    );
  }

  handlePagClick(pageNum: number) {
    this.selectedPagPage = pageNum;
  }

  resetForm(secondName: HTMLInputElement, jobTitle: HTMLInputElement) {
    secondName.value = '';
    jobTitle.value = '';
    this.selectAll();
  }

  listenStructuresUpdate(structures: Structures): void {
    this.structures = structures;
  }
}
