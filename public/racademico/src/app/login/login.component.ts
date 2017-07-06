import {Component,OnInit} from '@angular/core'
import {Acesso} from './acesso'
@Component({
    selector: 'login-app',
    templateUrl: 'login.component.html',
    styleUrls:['login.component.css']
})

export class LoginComponent implements OnInit{
    model = new Acesso("123",'124','Aluno')
    ngOnInit(){
        console.log(this.model)
    }
    onSubmit(){
        console.log(this.model)
    }
    get diagnostic() {
        return JSON.stringify(this.model)
    }
}
