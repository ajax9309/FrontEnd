import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Educ } from 'src/app/model/educ';
import { SEducService } from 'src/app/services/seduc.service';

@Component({
  selector: 'app-editeduc',
  templateUrl: './editeduc.component.html',
  styleUrls: ['./editeduc.component.css']
})
export class EditeducComponent implements OnInit {
  educ:Educ=null;

  constructor(private sEduc: SEducService,private activatedRouter: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {const id=this.activatedRouter.snapshot.params['id'];
  this.sEduc.detail(id).subscribe(
    data=>{
      this.educ=data;
    },err=>{
      alert("Error al modificar en init");
      this.router.navigate(['']);
    }
  )
}


onUpdate(): void{
  
  const id=this.activatedRouter.snapshot.params['id'];
  this.sEduc.update(id,this.educ).subscribe(
    data=>{
      this.router.navigate(['']);

    },err=>{
      alert("Error al modificar en update");
      this.router.navigate(['']);
    }
  )
}

}
