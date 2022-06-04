import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DatafactureService } from '../service/datafacture.service';
import { Facture } from '../facture';

@Component({
  selector: 'app-edit-facture',
  templateUrl: './edit-facture.component.html',
  styleUrls: ['./edit-facture.component.css']
})
export class EditFactureComponent implements OnInit {
  id:any;
  data:any;
  facture = new Facture;
  constructor(private route:ActivatedRoute,private datafactureservice:DatafactureService) 
  { }

  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
    this.getDataEdit();

}
getDataEdit(){
  this.datafactureservice.getFactureID(this.id).subscribe(res=>{
    this.data=res;
    this.facture=this.data;
  })
}
updateFacture(){
  this.datafactureservice.updateFacture(this.id, this.facture).subscribe(res=>{
    this.getDataEdit
  })
}
}