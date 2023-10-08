import { Component, OnInit } from '@angular/core';
import { StructuresService } from '../structures.service';
import { EmployesService } from '../employes.service';
import { Structures } from '../../../../server/src/types/structures';
import { Employ } from '../../../../server/src/types/employ';
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

  constructor (
    private structuresService: StructuresService,
    private employesService: EmployesService,
    ) { }

  ngOnInit(): void {
    this.structuresService.fetchData().subscribe((data) => {
      this.structures = data;
    });
    this.employesService.getEmploys('').subscribe((data) => {
      this.employes = data;
    })
  }  
}
