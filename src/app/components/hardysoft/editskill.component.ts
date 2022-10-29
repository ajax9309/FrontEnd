import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Skills } from 'src/app/model/skills';
import { SkillsService } from 'src/app/services/skills.service';

@Component({
  selector: 'app-editskill',
  templateUrl: './editskill.component.html',
  styleUrls: ['./editskill.component.css']
})
export class EditskillComponent implements OnInit {
  skill:Skills=null;

  constructor(private skills: SkillsService,private activatedRouter: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {const id=this.activatedRouter.snapshot.params['id'];
  this.skills.detail(id).subscribe(
    data=>{
      this.skill=data;
    },err=>{
      alert("Error al modificar en init");
      this.router.navigate(['']);
    }
  )
}


onUpdate(): void{
  
  const id=this.activatedRouter.snapshot.params['id'];
  this.skills.update(id,this.skill).subscribe(
    data=>{
      this.router.navigate(['']);

    },err=>{
      alert("Error al modificar en update");
      this.router.navigate(['']);
    }
  )
}

}

