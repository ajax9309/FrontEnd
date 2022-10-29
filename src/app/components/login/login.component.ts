import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Loginusuario } from 'src/app/model/loginusuario';
import { AuthService } from 'src/app/services/auth.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  isLogged= false;
  isLoggInFail= false;
  loginUsuario!:Loginusuario;
  nombreUsuario!: string;
  password!: string;
  roles: string[] = [];
  errMsj!: string;


  constructor(private tokenService: TokenService,private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    if(this.tokenService.getToken()){
      this.isLogged=true;
      this.isLoggInFail=false;
      this.roles=this.tokenService.getAuthorities();

    }
  }
  onLogin():void{
    this.loginUsuario=new Loginusuario(this.nombreUsuario, this.password);
     this.authService.login(this.loginUsuario).subscribe(data =>{
        this.isLogged= true;
        this.isLoggInFail= false;
        this.tokenService.setToken(data.token);
        this.tokenService.setUserName(data.nombreUsuario);
        this.roles=data.authorities;
        this.router.navigate([''])
      },err =>{
        this.isLogged=false;
        this.isLoggInFail=true;
        this.errMsj=err.error.mensaje;
        console.log(this.errMsj);
      })

  }

}
