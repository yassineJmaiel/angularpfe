import { Component, OnInit } from '@angular/core';
import { Bdc } from '../bdc';
import { DatabdcService } from '../service/databdc.service';
import Swal from 'sweetalert2'


import 'sweetalert2/src/sweetalert2.scss'
import { Router } from '@angular/router';
import { DatafournisseurService } from '../service/datafournisseur.service';

@Component({
  selector: 'app-ajouterbdc',
  templateUrl: './ajouterbdc.component.html',
  styleUrls: ['./ajouterbdc.component.css']
})
export class AjouterbdcComponent implements OnInit {
  bdc= new Bdc;
  fournisseur:any;

  
  constructor( private databdcservice:DatabdcService , private route:Router , private datafournisseur:DatafournisseurService) { 
    
  }
  
  ngOnInit(): void {
    if(!window.location.hash) {
      window.location.href = window.location.href + '#loaded';
      window.location.reload();
    }
  

  this.getfournisseurData()
  }
  
  insertbdc(){
    this.databdcservice.insertbdc(this.bdc).subscribe(res=>
      Swal.fire({
        title: ' BDC Ajouté avec succés',
        text: "",
        icon: 'success',
        showCancelButton :true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'liste Bon de commande'
      }).then((result) => {
        if (result.isConfirmed) {
    
          this.route.navigate(["/listebdc"]);
          
        
        } else if(result.isDismissed){
          this.route.navigate(["/"]);
        }
      }), error=>{
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Something went wrong!',
         
        })
      }
      
      
      
      )
    
   
      
    
  
  }

  getfournisseurData(){
    this.datafournisseur.getdata().subscribe(res=>{
      this.fournisseur = res;
    })
  }
}
 
