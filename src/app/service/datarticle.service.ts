import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DatarticleService {

  constructor(private httpclient:HttpClient) { }
    getdata(){
      return this.httpclient.get('http://127.0.0.1:8000/api/article');
    
  }
  insertData(data:any){
    return this.httpclient.post('http://127.0.0.1:8000/api/addarticle',data);
  
  }
}
