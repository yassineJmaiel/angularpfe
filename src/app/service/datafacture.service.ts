import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DatafactureService {

  constructor(private httpclient:HttpClient) { }
    getdata(){
      return this.httpclient.get('http://127.0.0.1:8000/api/Facture');
    
  }
  insertdata(data :any){
    return this.httpclient.post('http://127.0.0.1:8000/api/addfacture',data);
  
}
getFactureID(id:any){
  return this.httpclient.get('http://127.0.0.1:8000/api/Facture/'+id);
}
updateFacture(id:any,data:any)
{
  return this.httpclient.put('http://127.0.0.1:8000/api/updatefacture/'+id,data)
}
}
