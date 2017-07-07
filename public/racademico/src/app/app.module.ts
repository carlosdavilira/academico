import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {AppRoutingModule} from './app-routing.module'

import { AppComponent } from './app.component';
import { LoginComponent} from './login/login.component'
import {HomeComponent} from './home/home.component'
import {ContatoComponent} from './contato/contato.component'
import {AlunoComponent} from './usuarios/aluno/aluno.component';
import { ProfessorComponent } from './usuarios/professor/professor.component';
import { SecretariaComponent } from './usuarios/secretaria/secretaria.component';
import { CoordenadorComponent } from './usuarios/coordenador/coordenador.component';
import { PerfilComponent } from './perfil/perfil.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    ContatoComponent,
    AlunoComponent,
    ProfessorComponent,
    SecretariaComponent,
    CoordenadorComponent,
    PerfilComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
