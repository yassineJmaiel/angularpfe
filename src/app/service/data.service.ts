import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpclient:HttpClient) { }
    getdata(){
      return this.httpclient.get('http://127.0.0.1:8000/api/client');
    
  }
  deleteclient(id:any){
    return this.httpclient.delete('http://127.0.0.1:8000/api/deleteclient/'+id)
  }
  getclientid(id:any){
    return this.httpclient.get('http://127.0.0.1:8000/api/deleteclient/'+id)
  }
  insertData(data:any){
    return this.httpclient.post('http://127.0.0.1:8000/api/addclient',data);
  }

}
