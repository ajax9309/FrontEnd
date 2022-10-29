import { Injectable } from '@angular/core';
//import {Storage,ref} from '@angular/fire/storage'
@Injectable({
  providedIn: 'root'
})
export class ImgsvcService {

  constructor() { }

  /*public upImg($event:any,name: string){
    const file= $event.target.file[0]
    const imgref= ref(this.storage, `img/`+name) )
    uploadBytes(imgref,file)
    .then(response=>{this.getImg()})
    .catch(error=>console.log(error)
    )
  }
  getImg(){
    const imgref=ref(this.storage,'img')
    list(imgref)
    .then (async response=>{
      for(let item of response.items){
        this.url= await getDownloadURL(item);
        console.log("URL es:"+this.url);
      }
    })
    .catch(error=> console.log(error))
  }*/
}
