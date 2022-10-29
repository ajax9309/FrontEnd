import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Educ } from '../model/educ';

@Injectable({
  providedIn: 'root'
})
export class SEducService {
  URL= environment.URL +'educacion/';
  constructor(private httpClient: HttpClient) { }

  public lista():Observable <Educ[]>{
    return this.httpClient.get<Educ[]>(this.URL+'lista');
  }

  public detail(id: number): Observable<Educ>{
    return this.httpClient.get<Educ>(this.URL+ `detail/${id}`)
  }

  public save(educ:Educ): Observable<any>{
    return this.httpClient.post<any>(this.URL + `create`,educ);
  }

  public update(id:number,educ:Educ): Observable<any>{
    return this.httpClient.put<any>(this.URL+ `update/${id}`,educ);
  }

  public delete (id:number): Observable<any>{
    return this.httpClient.delete<any>(this.URL+ `delete/${id}`);
  }
}
