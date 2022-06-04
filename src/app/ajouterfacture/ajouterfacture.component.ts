import { DatafactureService } from './../service/datafacture.service';

import { Facture } from '../facture';

import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-ajouterfacture',
  templateUrl: './ajouterfacture.component.html',
  styleUrls: ['./ajouterfacture.component.css']
})
export class AjouterfactureComponent implements OnInit {
  
  
  
  facture= new Facture;
  constructor(private DatafactureService: DatafactureService) { }
  
  ngOnInit(): void {
    if(!window.location.hash) {
      window.location.href = window.location.href + '#loaded';
      window.location.reload();
    }
  
}

  

  insertdata(){
    this.DatafactureService.insertdata(this.facture).subscribe(res=>{
      console.log(res);
    })
  
}

}
