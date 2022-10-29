import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { persona } from 'src/app/model/persona.model';
import { ImgsvcService } from 'src/app/services/imgsvc.service';
import { PersonaService } from 'src/app/services/persona.service';

@Component({
  selector: 'app-editabout',
  templateUrl: './editabout.component.html',
  styleUrls: ['./editabout.component.css']
})
export class EditaboutComponent implements OnInit {
  persona:persona=null;

  constructor(private personaService: PersonaService,private activatedRouter: ActivatedRoute,
    private router: Router
    /*,public imagesvc: ImgsvcService*/) { }

  ngOnInit(): void {const id=this.activatedRouter.snapshot.params['id'];
  this.personaService.detail(id).subscribe(
    data=>{
      this.persona=data;
    },err=>{
      alert("Error al modificar en init");
      this.router.navigate(['']);
    }
  )

  }

  onUpdate():void{
    const id=this.activatedRouter.snapshot.params['id'];
    //this.persona.img=this.imagesvc.url
    this.personaService.update(id,this.persona).subscribe(
      data=>{
      this.router.navigate(['']);

    },err=>{
      alert("Error al modificar en update");
      this.router.navigate(['']);
    }
  )
}

  upImg($event:any){
    /*const id = this.activatedRouter.snapshot.params['id'];
    const name= "perfil#"+id;
    this.imagesvc.upImg($event,name)*/


  }
}
