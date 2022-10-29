import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Explaboral } from 'src/app/model/explaboral';
import { SExpService } from 'src/app/services/sexp.service';

@Component({
  selector: 'app-editxp',
  templateUrl: './editxp.component.html',
  styleUrls: ['./editxp.component.css']
})
export class EditxpComponent implements OnInit {
  expLab:Explaboral=null;

  constructor(private xp: SExpService,private activatedRouter: ActivatedRoute,
    private router: Router ) { }

  ngOnInit(): void {
    const id=this.activatedRouter.snapshot.params['id'];
    this.xp.detail(id).subscribe(
      data=>{
        this.expLab=data;
      },err=>{
        alert("Error al modificar en init");
        this.router.navigate(['']);
      }
    )
  }


  onUpdate(): void{
    
    const id=this.activatedRouter.snapshot.params['id'];
    this.xp.update(id,this.expLab).subscribe(
      data=>{
        this.router.navigate(['']);

      },err=>{
        alert("Error al modificar en update");
        this.router.navigate(['']);
      }
    )
  }

}
