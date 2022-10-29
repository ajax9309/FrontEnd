import { Component, OnInit } from '@angular/core';
import { Educ } from 'src/app/model/educ';
import { SEducService } from 'src/app/services/seduc.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-educ',
  templateUrl: './educ.component.html',
  styleUrls: ['./educ.component.css']
})
export class EducComponent implements OnInit {
  educ: Educ[]=[];

  constructor(private sEduc:SEducService,private tokenService: TokenService) { }
  isLogged=false;

  ngOnInit(): void {
    this.loadEduc();
    if(this.tokenService.getToken()){
      this.isLogged=true;
    }else{
      this.isLogged=false;
    }
  }

  loadEduc():void{
    this.sEduc.lista().subscribe(
      data=>{
        this.educ=data;
      }
    )

  }
  deleteEduc(id?:number){
    this.sEduc.delete(id).subscribe(
      data=>{
        this.loadEduc();
      },err=>{
        alert("Imposible eliminar")
      }
    )
  }

}
