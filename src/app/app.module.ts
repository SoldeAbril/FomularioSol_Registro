import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { RegistroComponent } from './components/registro/registro.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ErrorComponent } from './components/error/error.component';
import { HomeComponent } from './components/home/home.component';
import { RUTAS } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    RegistroComponent,
    NavbarComponent,
    ErrorComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    RUTAS,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
