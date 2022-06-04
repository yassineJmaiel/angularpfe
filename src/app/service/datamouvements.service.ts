import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DatamouvementsService {

  constructor(private httpclient:HttpClient) { }
  getdata(){
    return this.httpclient.get('http://127.0.0.1:8000/api/Mouvement');
  
}
insertmouvement(data:any){
  return this.httpclient.post('http://127.0.0.1:8000/api/addmouvement',data);

}
getmvtid(id:any){
  return this.httpclient.get('http://127.0.0.1:8000/api/Mouvement/'+id)
}
updatemvt(id :any , data:any){
  return this.httpclient.put('http://127.0.0.1:8000/api/updatemouvement/'+id,data);
}
}
