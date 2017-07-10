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
import { CalendarioComponent } from './calendario/calendario.component';
import { DiarioAlunoComponent } from './usuarios/aluno/diario-aluno/diario-aluno.component';
import { MaterialAlunoComponent } from './usuarios/aluno/material-aluno/material-aluno.component';
import { DocumentoAlunoComponent } from './usuarios/aluno/documento-aluno/documento-aluno.component';
import { DiarioProfessorComponent } from './usuarios/professor/diario-professor/diario-professor.component';
import { MaterialProfessorComponent } from './usuarios/professor/material-professor/material-professor.component';
import { AlocarComponent } from './usuarios/coordenador/alocar/alocar.component';
import { EmitirComponent } from './usuarios/secretaria/emitir/emitir.component';
import { TrancarComponent } from './usuarios/secretaria/trancar/trancar.component';
import { HorarioComponent } from './horario/horario.component';


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
    CalendarioComponent,
    DiarioAlunoComponent,
    MaterialAlunoComponent,
    DocumentoAlunoComponent,
    DiarioProfessorComponent,
    MaterialProfessorComponent,
    AlocarComponent,
    EmitirComponent,
    TrancarComponent,
    HorarioComponent,
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
