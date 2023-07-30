import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { SubMenuComponent } from './components/shared/sub-menu/sub-menu.component';
import { HomeComponent } from './components/views/home/home.component';
import { ListarProdutoComponent } from './components/views/prduto/listar-produto/listar-produto.component';
import { AdicionarProdutoComponent } from './components/views/prduto/adicionar-produto/adicionar-produto.component';
import {HttpClientModule} from '@angular/common/http'
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SubMenuComponent,
    HomeComponent,
    ListarProdutoComponent,
    AdicionarProdutoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
