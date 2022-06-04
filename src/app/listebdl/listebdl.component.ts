import { Component, OnInit } from '@angular/core';
import { DatabdlService } from '../service/databdl.service';

@Component({
  selector: 'app-listebdl',
  templateUrl: './listebdl.component.html',
  styleUrls: ['./listebdl.component.css']
})
export class ListebdlComponent implements OnInit {

  bdl:any;
  constructor(private databdlservice:DatabdlService) { }

  ngOnInit(): void {
  
    this.getbdldata();
  }
  getbdldata(){
  this.databdlservice.getdata().subscribe(res=>{
    this.bdl=res
   
  })
}
}
