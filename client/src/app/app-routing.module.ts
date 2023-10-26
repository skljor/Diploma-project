import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageAboutComponent } from './page-about/page-about.component';
import { PageStructuraComponent } from './page-structura/page-structura.component';
import { Page404Component } from './page404/page404.component';
import { PageEmployComponent } from './page-employ/page-employ.component';
import { PageSuborgsComponent } from './page-suborgs/page-suborgs.component';
import { PageEducationComponent } from './page-education/page-education.component';

const routes: Routes = [
  {
    path: '', 
    redirectTo: 'about', 
    pathMatch: 'full'
  },
  {
    title: 'about',
    path: 'about',
    component: PageAboutComponent
  },
  {
    title: 'structura',
    path: 'structura',
    component: PageStructuraComponent
  },
  {
    title: 'employee',
    path: 'employee/:id',
    component: PageEmployComponent
  },
  {
    title: 'suborgs',
    path: 'suborgs',
    component: PageSuborgsComponent
  },
  {
    title: 'education',
    path: 'education',
    component: PageEducationComponent
  },
  {
    path: '**',
    component: Page404Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
