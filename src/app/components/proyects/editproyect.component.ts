import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Proyect } from 'src/app/model/proyect';
import { ImgsvcService } from 'src/app/services/imgsvc.service';
import { ProyectsvcService } from 'src/app/services/proyectsvc.service';

@Component({
  selector: 'app-editproyect',
  templateUrl: './editproyect.component.html',
  styleUrls: ['./editproyect.component.css']
})
export class EditproyectComponent implements OnInit {
  proyecto:Proyect=null;

 
  constructor(private proyectsvc: ProyectsvcService,private activatedRouter: ActivatedRoute,
    private router: Router,
    public imagesvc: ImgsvcService,
    ) { }
    

  ngOnInit(): void {

    const id=this.activatedRouter.snapshot.params['id'];
    this.proyectsvc.detail(id).subscribe(
      data=>{
        this.proyecto=data;
      },err=>{
        alert("Error al modificar (init)");
        this.router.navigate(['']);
      }
    )
    
  }

  onUpdate(): void{
    
    const id=this.activatedRouter.snapshot.params['id'];
    this.proyecto.imgProyect=this.imagesvc.urlImg;
    
    this.proyectsvc.update(id,this.proyecto).subscribe(
      data=>{
        this.router.navigate([""]);
      },err=>{
        alert("Error al modificar (update)");
        this.router.navigate(['']);
      }
    )
    

  }
  
  upImg($event:any){
    const id = this.activatedRouter.snapshot.params['id'];
    const name= "proyect-"+id;
    this.imagesvc.upImg($event,name)
  }

  cancel(): void {

    this.imagesvc.clearUrl();
    this.router.navigate(['']);

  }

}
