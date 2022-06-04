import { Component, OnInit } from '@angular/core';
import { DatafournisseurService } from '../service/datafournisseur.service';

@Component({
  selector: 'app-listefournisseur',
  templateUrl: './listefournisseur.component.html',
  styleUrls: ['./listefournisseur.component.css']
})
export class ListefournisseurComponent implements OnInit {

  fournisseur:any;
  constructor(private DatafournisseurService:DatafournisseurService) { }

  ngOnInit(): void {
    
    this.getfournisseurData();
  }
  getfournisseurData(){
  this.DatafournisseurService.getdata().subscribe(res=>{
    this.fournisseur=res
    
  })
}
deletefournisseur(id:any) {
  this.DatafournisseurService.deletefournisseur(id).subscribe(res=>{
    this.getfournisseurData()
 } )
}

}
