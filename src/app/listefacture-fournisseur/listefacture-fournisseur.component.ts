import { Component, OnInit } from '@angular/core';
import { FacturefournisseurService } from '../service/facturefournisseur.service';

@Component({
  selector: 'app-listefacture-fournisseur',
  templateUrl: './listefacture-fournisseur.component.html',
  styleUrls: ['./listefacture-fournisseur.component.css']
})
export class ListefactureFournisseurComponent implements OnInit {

  facture_fournisseurs: any;
  constructor(private datafacturefournisseur:FacturefournisseurService) { }

  ngOnInit(): void {
    
    this.getfactureData();
  }
  getfactureData(){
  this.datafacturefournisseur.getdata().subscribe(res=>{
    this.facture_fournisseurs=res
    
  })
}

}
