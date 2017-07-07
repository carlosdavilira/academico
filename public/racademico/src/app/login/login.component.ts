import {Component,OnInit} from '@angular/core'
import {Router} from '@angular/router'
import {Acesso} from './acesso'
@Component({
    selector: 'login-app',
    templateUrl: 'login.component.html',
    styleUrls:['login.component.css']
})

export class LoginComponent implements OnInit{
    model = new Acesso('','','Aluno')
    constructor(private router: Router){}
    ngOnInit(){
        console.log(this.model)
    }
    onSubmit(){
        if(this.model.acesso =='Aluno'){
            this.router.navigate(['/aluno',this.model.matricula])
        }
        if(this.model.acesso == "Professor"){
            this.router.navigate(['/professor',this.model.matricula])
        }
        if(this.model.acesso == "Secretária"){
            this.router.navigate(['/secretaria',this.model.matricula])
        }
        if(this.model.acesso == "Coordenador"){
            this.router.navigate(['/coordenador',this.model.matricula])
        }   
    }
    get diagnostic() {
        return JSON.stringify(this.model)
    }
}
