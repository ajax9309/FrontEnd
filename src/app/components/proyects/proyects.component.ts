import { Component, OnInit } from '@angular/core';
import { Proyect } from 'src/app/model/proyect';
import { ProyectsvcService } from 'src/app/services/proyectsvc.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-proyects',
  templateUrl: './proyects.component.html',
  styleUrls: ['./proyects.component.css']
})
export class ProyectsComponent implements OnInit {
  proyecto: Proyect [] = [];

  constructor(public proyectSvc: ProyectsvcService, private tokenService: TokenService) { }
  isLogged=false;

  ngOnInit(): void {
    this.loadProyect()
    if(this.tokenService.getToken()){
      this.isLogged=true;
    }else{
      this.isLogged=false;
    }
  }

  loadProyect(){
    this.proyectSvc.lista().subscribe(data=>{this.proyecto=data;})
  }

  deleteProyect(id?:number){
    if(id !=undefined){
      this.proyectSvc.delete(id).subscribe(
        data=>{
          this.loadProyect();
        },err=>{
          alert("No se pudo borrar");
        }
      )
    }
  }

}
