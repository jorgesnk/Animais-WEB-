import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { routing } from './rotas';
import { LoginComponent } from './login/login.component'
import {
  MdButtonModule, MdCardModule, MdToolbarModule,
  MdInputModule, MdInputContainer, MdSidenavModule,
  MdSelectModule,MdOptionModule,MdGridListModule
} from '@angular/material'

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import { HomeService } from './service/home.service';
import { AnimalService } from './service/animal.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,

    HomeComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    routing,
    BrowserAnimationsModule,
    MdButtonModule,
    MdCardModule,
    MdToolbarModule,
    MdInputModule,
    MdSidenavModule,
    MdSelectModule,
    MdOptionModule,
    MdGridListModule
  ],
  providers: [HomeService, AnimalService],
  bootstrap: [AppComponent]
})

export class AppModule { }
