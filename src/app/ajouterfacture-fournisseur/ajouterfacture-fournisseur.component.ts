
{Facturefournisseur}
import { Component, OnInit } from '@angular/core';
import { Facturefournisseur } from '../facturefournisseur';
import { FacturefournisseurService } from '../service/facturefournisseur.service';


@Component({
  selector: 'app-ajouterfacture-fournisseur',
  templateUrl: './ajouterfacture-fournisseur.component.html',
  styleUrls: ['./ajouterfacture-fournisseur.component.css']
})
export class AjouterfactureFournisseurComponent implements OnInit {
  
  
  facturefournisseur= new Facturefournisseur;

  constructor(private DataService: FacturefournisseurService) { }

  ngOnInit(): void {
   
    if(!window.location.hash) {
      window.location.href = window.location.href + '#loaded';
      window.location.reload();
    }
  
}


insertfacturef(){
  this.DataService.insertData(this.facturefournisseur).subscribe(res=>{
    console.log(res);
  })
  
}

}
