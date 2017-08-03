import { UserService } from './service/user.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { routing } from './rotas';
import { LoginComponent } from './login/login.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  MdButtonModule, MdCardModule, MdToolbarModule,
  MdInputModule, MdInputContainer, MdSidenavModule,
  MdSelectModule, MdOptionModule, MdGridListModule,MdListModule
} from '@angular/material'

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import { HomeService } from './service/home.service';
import { EnderecoService } from './service/endereco.service';
import { AnimalService } from './service/animal.service';
import { MenuComponent } from './menu/menu.component';
import { BuscaComponent } from './busca/busca.component';
import { CardComponent } from './card/card.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import {Ng2ImgMaxModule} from'ng2-img-max';
import { CadastraAnimalComponent } from './cadastra-animal/cadastra-animal.component';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,

    MenuComponent,

    BuscaComponent,

    CardComponent,

    CadastroComponent,

    CadastraAnimalComponent,

    FooterComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    Ng2ImgMaxModule,
    routing,
    BrowserAnimationsModule,
    MdButtonModule,
    MdCardModule,
    MdToolbarModule,
    FormsModule,
    MdInputModule,
    MdSidenavModule,
    MdSelectModule,
    MdOptionModule,
    MdGridListModule,
    MdListModule
  ],
  providers: [HomeService, AnimalService,EnderecoService,UserService],
  bootstrap: [AppComponent]
})

export class AppModule { }
