import {Component,OnInit} from '@angular/core'
import {ActivatedRoute,Params} from '@angular/router'

@Component({
    selector: 'aluno-app',
    templateUrl:'aluno.component.html',
    styleUrls:['aluno.component.css']
})

export class AlunoComponent implements OnInit{ 
    matricula:string
    constructor(
     
        private router: ActivatedRoute,
    ){}
    
    ngOnInit(){
        this.router.params.subscribe((params: Params) => {
            this.matricula = params['matricula']
            
        })
     }
}