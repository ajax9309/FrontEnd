import { Injectable } from '@angular/core';
import { Storage,ref, uploadBytes, list, getDownloadURL} from '@angular/fire/storage'
@Injectable({
  providedIn: 'root'
})
export class ImgsvcService {
  url: string="";
  urlImg: string="";
  nombre: string="";

  constructor(private storage: Storage) { }

  public upImg($event:any, name: string){
    const file= $event.target.files[0];
    const imgref= ref(this.storage, `img/`+name);
    this.nombre= name;
    uploadBytes(imgref,file)
    .then(response=>{this.getImg()})
    .catch(error=>console.log(error)
    )
  }

  getImg(){
    const imageref=ref(this.storage,'img')
    list(imageref)
    .then (async response=>{
      for(let item of response.items){
        this.url= await getDownloadURL(item);  
        if(this.nombre==item.name){
          this.urlImg=this.url;
        }
      }
    })
    .catch(error=> console.log(error))
  }

  clearUrl() {
    this.url = "";
    this.urlImg ="";
  }
}
