import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class DatabdsService {

  constructor(private httpclient:HttpClient) { }
  insertbds(data:any){
    return this.httpclient.post('http://127.0.0.1:8000/api/addbds',data);
  
  }
}
