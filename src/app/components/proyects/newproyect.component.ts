import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Proyect } from 'src/app/model/proyect';
import { ImgsvcService } from 'src/app/services/imgsvc.service';
import { ProyectsvcService } from 'src/app/services/proyectsvc.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-newproyect',
  templateUrl: './newproyect.component.html',
  styleUrls: ['./newproyect.component.css']
})
export class NewproyectComponent implements OnInit {
  nomProyect: string='';
  descProyect: string='';
  imgProyect: string='';
 

  constructor(private proyectos:ProyectsvcService
    ,private router: Router
    ,public imagesvc: ImgsvcService) { }

  ngOnInit(): void {
    this.imagesvc.clearUrl();
  }

  onCreate():void{
    this.imgProyect=this.imagesvc.urlImg;
    const proyectos=new Proyect(this.nomProyect,this.descProyect,this.imgProyect);
    this.proyectos.save(proyectos).subscribe(
      data=>{
        alert("Proyecto guardado");
        this.router.navigate(['']);
      },err=>{
        alert("Falla al grabar");
        this.router.navigate(['']);
      }
      )
      this.imagesvc.clearUrl();
  }

  upImg($event:any){
    const name= "proyect-"+this.nomProyect;
    this.imagesvc.upImg($event,name)
  }

  cancel(): void {

    this.imagesvc.clearUrl();
    this.router.navigate(['']);

  }

}
