import { Component, OnInit } from '@angular/core';
import { persona } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/services/persona.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  persona: persona = null;
  
  constructor(public personaService: PersonaService, private tokenService: TokenService) { }
  isLogged=false;

  ngOnInit(): void {
    this.loadPersona()
    if(this.tokenService.getToken()){
      this.isLogged=true;
    }else{
      this.isLogged=false;
    }
  }
  loadPersona(){
    this.personaService.detail(1).subscribe(
      data=>{
        this.persona=data
      }
    )
  }

}
