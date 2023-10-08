import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { TopHeaderComponent } from './top-header/top-header.component';
import { PageAboutComponent } from './page-about/page-about.component';
import { PageStructuraComponent } from './page-structura/page-structura.component';
import { NavBarItemComponent } from './nav-bar-item/nav-bar-item.component';
import { Page404Component } from './page404/page404.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    NavBarComponent,
    TopHeaderComponent,
    PageAboutComponent,
    PageStructuraComponent,
    NavBarItemComponent,
    Page404Component,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
