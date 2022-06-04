import { Component, OnInit } from '@angular/core';
import { DatabdrService } from '../service/databdr.service';

@Component({
  selector: 'app-listebdr',
  templateUrl: './listebdr.component.html',
  styleUrls: ['./listebdr.component.css']
})
export class ListebdrComponent implements OnInit {

 

    bdr:any;
    constructor(private databdrservice:DatabdrService) { }
  
    ngOnInit(): void {
    
      this.getbdldata();
    }
    getbdldata(){
    this.databdrservice.getdata().subscribe(res=>{
      this.bdr=res
     
    })
    }
    
  }



