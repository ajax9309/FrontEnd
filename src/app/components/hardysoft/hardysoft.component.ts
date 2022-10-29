import { Component, OnInit } from '@angular/core';
import { Skills } from 'src/app/model/skills';
import { SkillsService } from 'src/app/services/skills.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-hardysoft',
  templateUrl: './hardysoft.component.html',
  styleUrls: ['./hardysoft.component.css']
})
export class HardysoftComponent implements OnInit {
  skill:Skills[]=[];

  constructor(private skillS:SkillsService,private tokenService:TokenService) { }
  isLogged=false;

  ngOnInit(): void {
    this.loadSkill();
    if(this.tokenService.getToken()){
      this.isLogged=true;
    }else{
      this.isLogged=false;
    }
  }

  loadSkill():void{
    this.skillS.lista().subscribe(
      data=>{
        this.skill=data;
      }
    )

  }
  deleteSkill(id?:number){
    this.skillS.delete(id).subscribe(
      data=>{
        this.loadSkill();
      },err=>{
        alert("Imposible eliminar")
      }
    )
  }

}
