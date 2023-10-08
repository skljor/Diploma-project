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
  private searchParams: EmployQueryParams = {};


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
  }

  private getEmployes(queryParams?: EmployQueryParams) {
    if (queryParams) {
      const queryString = Object.keys(queryParams).reduce((acc, item, index, arr) => {
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
}
