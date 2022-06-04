import { Component, OnInit } from '@angular/core';
import { Bdl } from 'src/app/bdl';
import { DatabdlService } from '../service/databdl.service';
import Swal from 'sweetalert2'


import 'sweetalert2/src/sweetalert2.scss'
import { Router } from '@angular/router';



@Component({
  selector: 'app-ajouterbdl',
  templateUrl: './ajouterbdl.component.html',
  styleUrls: ['./ajouterbdl.component.css']
})
export class AjouterbdlComponent implements OnInit {
  
  constructor(private Databdlservice:DatabdlService ,private route:Router ){}

  bdl= new Bdl;

  ngOnInit(): void {
    
    if(!window.location.hash) {
      window.location.href = window.location.href + '#loaded';
      window.location.reload();
    }
  

  }
  insertbdl(){
    this.Databdlservice.insertData(this.bdl).subscribe(res=>
      
      Swal.fire({
        title: ' BDL Ajouté avec succés',
        text: "",
        icon: 'success',
        showCancelButton :true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'liste Bon de Livraison'
      }).then((result) => {
        if (result.isConfirmed) {
    
          this.route.navigate(["/listebdl"]);
          
        
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

 
}



