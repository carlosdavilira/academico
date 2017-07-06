import {NgModule} from '@angular/core'
import {RouterModule,Routes} from '@angular/router'

import {LoginComponent} from './login/login.component'
import {HomeComponent} from './home/home.component'
import {ContatoComponent} from './contato/contato.component'
import {AlunoComponent} from './aluno/aluno.component'

const routes : Routes = [
    {path:'',redirectTo:'home',pathMatch:'full'},
    {path: "login",component:LoginComponent},
    {path: 'home',component:HomeComponent},
    {path:'contato',component: ContatoComponent},
    {path: 'aluno/:matricula',component:AlunoComponent},
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports:[RouterModule]
})

export class AppRoutingModule{

}