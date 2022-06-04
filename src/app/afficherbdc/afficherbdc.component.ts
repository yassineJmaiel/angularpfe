import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Bdc } from '../bdc';
import { DatabdcService } from '../service/databdc.service';
@Component({
  selector: 'app-afficherbdc',
  templateUrl: './afficherbdc.component.html',
  styleUrls: ['./afficherbdc.component.css']
})
export class AfficherbdcComponent implements OnInit {
  id : any ;
  bdc:any;
  
  bdcc= new Bdc;
  constructor(private route:ActivatedRoute , private databdcservice:DatabdcService) { }

  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
    this.getdataedit(); 
  }
  
getdataedit(){
this.databdcservice.getdataid(this.id).subscribe(res=>{
  this.bdc=res;
  this.bdcc=this.bdc
});

}

}
