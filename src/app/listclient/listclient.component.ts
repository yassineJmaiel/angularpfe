import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-listclient',
  templateUrl: './listclient.component.html',
  styleUrls: ['./listclient.component.css']
})

export class ListclientComponent implements OnInit {

client:any;
  constructor(private DataService:DataService) { }

  ngOnInit(): void {
   
    this.getClientData();
  }
  getClientData(){
  this.DataService.getdata().subscribe(res=>{
    this.client=res
    
  })
}
deleteclient(id:any) {
  this.DataService.deleteclient(id).subscribe(res=>{
    this.getClientData
 } )
}
}
