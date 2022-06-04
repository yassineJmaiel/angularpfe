import { Component, OnInit } from '@angular/core';
import { Mouvements } from '../mouvements';
import { DatamouvementsService } from '../service/datamouvements.service';

@Component({
  selector: 'app-ajoutermouvement',
  templateUrl: './ajoutermouvement.component.html',
  styleUrls: ['./ajoutermouvement.component.css']
})
export class AjoutermouvementComponent implements OnInit {

Mvt:any;
  constructor(private DatamouvementsService:DatamouvementsService) { }
  mvts = new Mouvements;
  ngOnInit(): void {
    if(!window.location.hash) {
      window.location.href = window.location.href + '#loaded';
      window.location.reload();
    }
  

  
    this.getMvtdata();
  }
  getMvtdata(){
  this.DatamouvementsService.getdata().subscribe(res=>{
    this.Mvt=res
   
  })
}
insertmouvement(){
  this.DatamouvementsService.insertmouvement(this.mvts).subscribe(res=>console.log(res));
}
}
