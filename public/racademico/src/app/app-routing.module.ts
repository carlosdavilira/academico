import {NgModule} from '@angular/core'
import {RouterModule,Routes} from '@angular/router'

import {LoginComponent} from './login/login.component'
import {HomeComponent} from './home/home.component'
import {ContatoComponent} from './contato/contato.component'
import {AlunoComponent} from './usuarios/aluno/aluno.component'
import {ProfessorComponent} from './usuarios/professor/professor.component'
import {SecretariaComponent} from './usuarios/secretaria/secretaria.component'
import {CoordenadorComponent} from './usuarios/coordenador/coordenador.component'
import {PerfilComponent} from './perfil/perfil.component'
import {CalendarioComponent} from './calendario/calendario.component'
import {DiarioAlunoComponent} from './usuarios/aluno/diario-aluno/diario-aluno.component'
import {MaterialAlunoComponent} from './usuarios/aluno/material-aluno/material-aluno.component'
import {DocumentoAlunoComponent} from './usuarios/aluno/documento-aluno/documento-aluno.component'
const routes : Routes = [
    {path:'',redirectTo:'home',pathMatch:'full'},
    {path: "login",component:LoginComponent},
    {path: 'home',component:HomeComponent},
    {path:'contato',component: ContatoComponent},
    {path: 'aluno',component:AlunoComponent,
    children: [
        {path:'',redirectTo: 'perfil',pathMatch:'full'},
        {path:'perfil',component:PerfilComponent},
        {path:'calendario',component:CalendarioComponent},
        {path:'diario',component:DiarioAlunoComponent},
        {path:'material',component:MaterialAlunoComponent},
        {path:'documento',component:DocumentoAlunoComponent}
        ]},
    {path: 'professor',component:ProfessorComponent,children:[
        {path:'',redirectTo:'perfil',pathMatch:'full'},
        {path:'perfil',component:PerfilComponent},
        {path:'calendario',component:CalendarioComponent}
    ]},
    {path: 'secretaria/:matricula',component:SecretariaComponent},
    {path: 'coordenador/:matricula',component:CoordenadorComponent},
    {path: 'perfil',component:PerfilComponent},
    {path: 'calendario',component:CalendarioComponent}
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports:[RouterModule]
})

export class AppRoutingModule{

}