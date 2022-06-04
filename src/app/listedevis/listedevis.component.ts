import { Component, OnInit } from '@angular/core';
import { DatadevisService } from '../service/datadevis.service';

@Component({
  selector: 'app-listedevis',
  templateUrl: './listedevis.component.html',
  styleUrls: ['./listedevis.component.css']
})
export class ListedevisComponent implements OnInit {

  devis: any;
  constructor(private DatadevisService:DatadevisService) { }

  ngOnInit(): void {
    
    this.getdevisData();
  }
  getdevisData(){
  this.DatadevisService.getdata().subscribe(res=>{
    this.devis=res
    
  })
}
}
