import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageAboutComponent } from './page-about/page-about.component';
import { PageStructuraComponent } from './page-structura/page-structura.component';

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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
