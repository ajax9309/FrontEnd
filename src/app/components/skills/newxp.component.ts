import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Explaboral } from 'src/app/model/explaboral';
import { SExpService } from 'src/app/services/sexp.service';

@Component({
  selector: 'app-newxp',
  templateUrl: './newxp.component.html',
  styleUrls: ['./newxp.component.css']
})
export class NewxpComponent implements OnInit {
  nombreE: string='';
  descripcionE: string='';

  constructor(private xp:SExpService,private router: Router) { }


  ngOnInit(): void {
  }

  onCreate():void{
    const xp=new Explaboral(this.nombreE,this.descripcionE);
    this.xp.save(xp).subscribe(
      data=>{
        alert("Experiencia guardada");
        this.router.navigate(['']);
      },err=>{
        alert("Falla al grabar");
        this.router.navigate(['']);
      }
      )
  }

}
