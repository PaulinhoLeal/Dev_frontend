import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { NavbarsubMenuComponent } from './components/shared/navbarsub-menu/navbarsub-menu.component';
import { HomeComponent } from './components/views/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    NavbarsubMenuComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
