import { Component, OnInit } from '@angular/core';
import { DatafournisseurService } from '../service/datafournisseur.service';
import Swal from 'sweetalert2'


import 'sweetalert2/src/sweetalert2.scss'
import { Router } from '@angular/router';
@Component({
  selector: 'app-listefournisseur',
  templateUrl: './listefournisseur.component.html',
  styleUrls: ['./listefournisseur.component.css']
})
export class ListefournisseurComponent implements OnInit {

  fournisseur:any;
  constructor(private DatafournisseurService:DatafournisseurService, private router:Router) { }

  ngOnInit(): void {
    
    this.getfournisseurData();
  }
  getfournisseurData(){
  this.DatafournisseurService.getdata().subscribe(res=>{
    this.fournisseur=res
    
  })
}
deletefournisseur(id:any) {

 
  Swal.fire({
    title: 'Êtes-vous sûr de supprimer les données ?',
 
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, delete it!'
  }).then((result) => {
    if (result.isConfirmed) {
      this.DatafournisseurService.deletefournisseur(id).subscribe(res=>{

      Swal.fire(
        'Supprimer',
        'les données ont été supprimées.',
        'success'
       
      )
      this.router.navigate(["/listefournisseurs"]);
      })
    }
  })
}

}




  
