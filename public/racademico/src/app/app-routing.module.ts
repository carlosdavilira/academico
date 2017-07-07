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

const routes : Routes = [
    {path:'',redirectTo:'home',pathMatch:'full'},
    {path: "login",component:LoginComponent},
    {path: 'home',component:HomeComponent},
    {path:'contato',component: ContatoComponent},
    {path: 'aluno/:matricula',component:AlunoComponent},
    {path: 'professor/:matricula',component:ProfessorComponent},
    {path: 'secretaria/:matricula',component:SecretariaComponent},
    {path: 'coordenador/:matricula',component:CoordenadorComponent},
    {path: 'perfil',component:PerfilComponent}
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports:[RouterModule]
})

export class AppRoutingModule{

}