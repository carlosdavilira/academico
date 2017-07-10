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
import {HorarioComponent} from './horario/horario.component'
import {DiarioAlunoComponent} from './usuarios/aluno/diario-aluno/diario-aluno.component'
import {MaterialAlunoComponent} from './usuarios/aluno/material-aluno/material-aluno.component'
import {DocumentoAlunoComponent} from './usuarios/aluno/documento-aluno/documento-aluno.component'
import {DiarioProfessorComponent} from './usuarios/professor/diario-professor/diario-professor.component'
import {MaterialProfessorComponent} from './usuarios/professor/material-professor/material-professor.component'
import {TrancarComponent} from './usuarios/secretaria/trancar/trancar.component'
import {EmitirComponent} from './usuarios/secretaria/emitir/emitir.component'
import {AlocarComponent} from './usuarios/coordenador/alocar/alocar.component'

const routes : Routes = [
    {path:'',redirectTo:'home',pathMatch:'full'},
    {path: "login",component:LoginComponent},
    {path: 'home',component:HomeComponent},
    {path:'contato',component: ContatoComponent},
    {path: 'aluno',component:AlunoComponent,
    children: [
        {path:'',redirectTo: 'perfil',pathMatch:'full'},
        {path:'perfil',component:PerfilComponent},
        {path:'horario',component:HorarioComponent},
        {path:'calendario',component:CalendarioComponent},
        {path:'diario',component:DiarioAlunoComponent},
        {path:'material',component:MaterialAlunoComponent},
        {path:'documento',component:DocumentoAlunoComponent}
        ]},
    {path: 'professor',component:ProfessorComponent,children:[
        {path:'',redirectTo:'perfil',pathMatch:'full'},
        {path:'perfil',component:PerfilComponent},
        {path:'horario',component:HorarioComponent},
        {path:'calendario',component:CalendarioComponent},
        {path:'diario',component:DiarioProfessorComponent},
        {path:'material',component: MaterialProfessorComponent}
    ]},
    {path: 'coordenador',component:CoordenadorComponent,children:[
        {path: '',redirectTo:'perfil',pathMatch:'full'},
        {path:'perfil',component:PerfilComponent},
        {path:'alocar',component:AlocarComponent}    
    ]},
    {path: 'secretaria',component:SecretariaComponent,children:[
        {path: '',redirectTo:'perfil',pathMatch:'full'},
        {path:'perfil',component:PerfilComponent},
        {path:'trancar',component:TrancarComponent},
        {path: 'emitir', component:EmitirComponent}
    ]},

]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports:[RouterModule]
})

export class AppRoutingModule{

}