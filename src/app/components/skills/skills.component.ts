import { Component, OnInit } from '@angular/core';
import { Explaboral } from 'src/app/model/explaboral';
import { SExpService } from 'src/app/services/sexp.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  xp: Explaboral[]=[];


  constructor(private sexp:SExpService,private tokenService: TokenService) { }

  isLogged= false;

  ngOnInit(): void {
    this.loadXp();
    if(this.tokenService.getToken()){
      this.isLogged= true;
    }else{
      this.isLogged= false;
    }
  }
  loadXp():void{
    this.sexp.lista().subscribe(data=>{this.xp=data;})
  }

  deleteXp(id?:number){
    if(id !=undefined){
      this.sexp.delete(id).subscribe(
        data=>{
          this.loadXp();
        },err=>{
          alert("No se pudo borrar");
        }
      )
    }
  }
}

