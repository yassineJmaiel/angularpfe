import { Component, OnInit } from '@angular/core';
import { DatabdcService } from '../service/databdc.service';

@Component({
  selector: 'app-listebdc',
  templateUrl: './listebdc.component.html',
  styleUrls: ['./listebdc.component.css']
})
export class ListebdcComponent implements OnInit {


  bdc: any;
  constructor(private DatabdcService:DatabdcService ) { }

  ngOnInit(): void {
    
    this.getbdcData();
    
   
  }
  
  getbdcData(){
  this.DatabdcService.getdata().subscribe(res=>{
    this.bdc=res
    
  })
  
}

}
