import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DatafournisseurService {

  constructor(private httpclient:HttpClient) { }
    getdata(){
      return this.httpclient.get('http://127.0.0.1:8000/api/Fournisseur');
    
  }
  deletefournisseur(id:any){
    return this.httpclient.delete('http://127.0.0.1:8000/api/deletefournisseur/'+id)
  }
  insertData(data:any){
    return this.httpclient.post('http://127.0.0.1:8000/api/addFournisseur',data);
  }
}
