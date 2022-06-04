import { Component, OnInit } from '@angular/core';
import { DatafournisseurService} from 'src/app/service/datafournisseur.service';
import {Fournisseur} from 'src/app/fournisseur';


@Component({
  selector: 'app-ajouterfournisseur',
  templateUrl: './ajouterfournisseur.component.html',
  styleUrls: ['./ajouterfournisseur.component.css']
})
export class AjouterfournisseurComponent implements OnInit {
  
  fournisseur=new Fournisseur;
  constructor(private DataService: DatafournisseurService) {
    
    
   }



  ngOnInit(): void {
    
    if(!window.location.hash) {
      window.location.href = window.location.href + '#loaded';
      window.location.reload();
    }
  
}

  
insertfournisseur(){
  this.DataService.insertData(this.fournisseur).subscribe(res=>{
    console.log(res);
  })
  
}
  

}
