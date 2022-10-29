import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Explaboral } from '../model/explaboral';

@Injectable({
  providedIn: 'root'
})
export class SExpService {
  URL= environment.URL +'explab/';

  constructor(private httpClient: HttpClient) { }
  
  public lista():Observable <Explaboral[]>{
    return this.httpClient.get<Explaboral[]>(this.URL+'lista');
  }

  public detail(id: number): Observable<Explaboral>{
    return this.httpClient.get<Explaboral>(this.URL+ `detail/${id}`)
  }

  public save(xp:Explaboral): Observable<any>{
    return this.httpClient.post<any>(this.URL + `create`,xp);
  }

  public update(id:number,xp:Explaboral): Observable<any>{
    return this.httpClient.put<any>(this.URL+ `update/${id}`,xp);
  }

  public delete (id:number): Observable<any>{
    return this.httpClient.delete<any>(this.URL+ `delete/${id}`);
  }
}
