import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DatadevisService {

  constructor(private httpclient:HttpClient) { }
    getdata(){
      return this.httpclient.get('http://127.0.0.1:8000/api/Devis');
    
  }
  insertData(data:any){
    return this.httpclient.post('http://127.0.0.1:8000/api/adddevis',data);
  }
}