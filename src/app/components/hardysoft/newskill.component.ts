import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Skills } from 'src/app/model/skills';
import { SkillsService } from 'src/app/services/skills.service';

@Component({
  selector: 'app-newskill',
  templateUrl: './newskill.component.html',
  styleUrls: ['./newskill.component.css']
})
export class NewskillComponent implements OnInit {
  nomSkill:string;
  porcSkill:number;

  constructor(private skills: SkillsService,private router:Router) { }

  ngOnInit(): void {
  }

  onCreate():void{
    const skills=new Skills(this.nomSkill,this.porcSkill);
    this.skills.save(skills).subscribe(
      data=>{
        alert("Habilidad guardada");
        this.router.navigate(['']);
      },err=>{
        alert("Falla al grabar");
        this.router.navigate(['']);
      }
      )
  }

}
