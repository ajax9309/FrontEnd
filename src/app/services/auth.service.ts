import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { JwtDto } from '../model/jwt-dto';
import { Loginusuario } from '../model/loginusuario';
import { Newusuario } from '../model/newusuario';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  URL = environment.URL + 'auth/';


  constructor(private httpClient:HttpClient) { }

  public nuevo(nuevoUsuario:Newusuario): Observable<any>{
    return this.httpClient.post<any>(this.URL + 'nuevo',nuevoUsuario);

  }
  public login (loginUsuario: Loginusuario): Observable<JwtDto>{
    return this.httpClient.post<JwtDto>(this.URL + 'login', loginUsuario)
  }
}
