import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageAboutComponent } from './page-about/page-about.component';
import { PageStructuraComponent } from './page-structura/page-structura.component';
import { Page404Component } from './page404/page404.component';

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
    path: '**',
    component: Page404Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
