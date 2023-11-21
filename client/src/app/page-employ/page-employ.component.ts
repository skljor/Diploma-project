import { Component, OnInit } from '@angular/core';
import { EmployesService } from '../employes.service';
import { StructuresService } from '../structures.service';
import { Employee } from '../../../../server/src/types/employee';
import { ActivatedRoute } from '@angular/router';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { Structures } from '../../../../server/src/types/structures';
import { StructuresObserver } from 'src/types/structures-observer';

@Component({
  selector: 'app-page-employ',
  templateUrl: './page-employ.component.html',
  styleUrls: ['./page-employ.component.scss']
})
export class PageEmployComponent implements OnInit, StructuresObserver {
  employee: Employee | undefined;
  structures: Structures | undefined;
  employIcon = faUser;
  loaded = false;

  constructor(
    private employService: EmployesService,
    private structuresService: StructuresService,
    private activatedRoot: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    const id = this.activatedRoot.snapshot.paramMap.get('id')
    this.employService.getEmployees().subscribe((data) => {
      this.employee = data.find((employee) => employee.employeeID === parseInt(id as string));
      this.loaded = true
    });
    this.structuresService.subscribe(this);
  }

  listenStructuresUpdate(structures: Structures): void {
    this.structures = structures;
  }

  getStructureName() {
    return this.structures?.find((structure) => structure.code === this.employee?.structureCode)?.title;
  }

  getFullName() {
    return '' 
    + (this.employee?.lastName ? `${this.employee?.lastName} ` : '')
    + (this.employee?.firstName ? this.employee?.firstName : '')
    + (this.employee?.middleName ? ` ${this.employee?.middleName}` : '')
    ;

  }
}
