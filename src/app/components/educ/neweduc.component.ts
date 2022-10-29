import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Educ } from 'src/app/model/educ';
import { SEducService } from 'src/app/services/seduc.service';

@Component({
  selector: 'app-neweduc',
  templateUrl: './neweduc.component.html',
  styleUrls: ['./neweduc.component.css']
})
export class NeweducComponent implements OnInit {
  nomEduc: string='';
  descEduc: string='';
  constructor(private sEduc:SEducService,private router: Router) { }

  ngOnInit(): void {
  }

  onCreate():void{
    const sEduc=new Educ(this.nomEduc,this.descEduc);
    this.sEduc.save(sEduc).subscribe(
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
