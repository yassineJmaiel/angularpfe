import { Component, OnInit } from '@angular/core';
import { DatafactureService } from '../service/datafacture.service';
@Component({
  selector: 'app-listefacture',
  templateUrl: './listefacture.component.html',
  styleUrls: ['./listefacture.component.css']
})
export class ListefactureComponent implements OnInit {

  facture: any;
  constructor(private DatafactureService:DatafactureService) { }

  ngOnInit(): void {
    
    this.getfactureData();
  }
  getfactureData(){
  this.DatafactureService.getdata().subscribe(res=>{
    this.facture=res
    
  })
}

}
