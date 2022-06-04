import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DatabdcService {

  constructor( private httpclient:HttpClient) { }
  insertbdc(data:any){
    return this.httpclient.post('http://127.0.0.1:8000/api/addbdc',data);
   
  }
  
  getdata(){
    return this.httpclient.get('http://127.0.0.1:8000/api/bdc');
  
}
getdataid(id :any){
  return this.httpclient.get('http://127.0.0.1:8000/api/bdc/'+id);
}
getbdcid(id:any){
  return this.httpclient.get('http://127.0.0.1:8000/api/bdc/'+id)
}
updatebdc(id :any , data:any){
  return this.httpclient.put('http://127.0.0.1:8000/api/updatebdc/'+id,data);
}
}
