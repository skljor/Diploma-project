import { Component, OnInit } from '@angular/core';
import { StructuresService } from '../structures.service';
import { EmployesService } from '../employes.service';
import { Structures } from '../../../../server/src/types/structures';
import { Employee } from '../../../../server/src/types/employee';
import { EmployQueryParams } from 'src/types/employ-query-params';
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
  employIcon = faUser;
  selectedPagPage = 1;
  itemsPerPage = 6;
  searchParams: EmployQueryParams = {};
  loaded = false;

  constructor (
    private structuresService: StructuresService,
    private employesService: EmployesService,
    ) { }

  ngOnInit(): void {
    this.structuresService.subscribe(this);
    this.employesService.getEmployees().subscribe((data) => {
      this.employees = data;
      this.loaded = true;
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

  searchSubmit(secondName: string, jobTitle: string) {
    this.searchParams.lastName = secondName.length > 0 ? secondName: undefined;
    this.searchParams.jobTitle = jobTitle.length > 0 ? jobTitle : undefined;
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

  listenStructuresUpdate(structures: Structures): void {
    this.structures = structures;
  }
}
