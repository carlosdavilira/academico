import {NgModule} from '@angular/core'
import {RouterModule,Routes} from '@angular/router'

import {LoginComponent} from './login/login.component'
import {HomeComponent} from './home/home.component'
import {ContatoComponent} from './contato/contato.component'

const routes : Routes = [
    {path:'',redirectTo:'home',pathMatch:'full'},
    {path: "login",component:LoginComponent},
    {path: 'home',component:HomeComponent},
    {path:'contato',component: ContatoComponent}
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports:[RouterModule]
})

export class AppRoutingModule{

}