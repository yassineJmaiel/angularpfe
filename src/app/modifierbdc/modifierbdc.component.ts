import { Component, OnInit } from '@angular/core';
import { Bdc } from '../bdc';
import { ActivatedRoute, Router } from '@angular/router';
import { DatabdcService } from '../service/databdc.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-modifierbdc',
  templateUrl: './modifierbdc.component.html',
  styleUrls: ['./modifierbdc.component.css']
})
export class ModifierbdcComponent implements OnInit {

  

  id : any ;
Bdc:any;

bdc= new Bdc;


  constructor( private route:ActivatedRoute , private router:Router,private databdc:DatabdcService) { }

  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
    this.getdataedit(); 
  }
  
getdataedit(){
this.databdc.getbdcid(this.id).subscribe(res=>{
  this.Bdc=res;
  this.bdc=this.Bdc
});

}
updatebdc(){
  
  Swal.fire({
    title: 'voulez-vous enregistrer les modifications ?',
    showDenyButton: true,
    showCancelButton: true,
    confirmButtonText: 'Enregistrer',
    denyButtonText: `Ne pas enregistrer `,
  }).then((result) => {
    
    if (result.isConfirmed) {
      this.databdc.updatebdc(this.id, this.bdc).subscribe(res=>{
        Swal.fire('Enregisté!', '', 'success')
        this.router.navigate(["/listebdc"]);
      
      },error=>{
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'il y a une erreur',
         
        })
       
      })
    
      
    
      
    } else if (result.isDenied) {
      Swal.fire('les modifications ne sont pas enregistrés', '', 'info')
    }
  })
  

  
}
}
