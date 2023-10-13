import { Component, OnInit } from '@angular/core';
import { EmployesService } from '../employes.service';
import { StructuresService } from '../structures.service';
import { Employ } from '../../../../server/src/types/employ';
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
  employ: Employ | undefined;
  structures: Structures | undefined;
  employIcon = faUser;

  constructor(
    private employService: EmployesService,
    private structuresService: StructuresService,
    private activatedRoot: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    const id = this.activatedRoot.snapshot.paramMap.get('id')
    this.employService.getEmploys(`id=${id}`).subscribe((data) => {
      this.employ = data[0];
    });
    this.structuresService.subscribe(this);
  }

  listernStructuresUpdate(structures: Structures): void {
    this.structures = structures;
  }

  getStructureName() {
    return this.structures?.find((structure) => structure.code === this.employ?.structureCode)?.title;
  }
}
