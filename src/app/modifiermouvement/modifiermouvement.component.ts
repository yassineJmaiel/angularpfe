import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DatamouvementsService } from '../service/datamouvements.service';
import { Mouvements } from '../mouvements';
@Component({
  selector: 'app-modifiermouvement',
  templateUrl: './modifiermouvement.component.html',
  styleUrls: ['./modifiermouvement.component.css']
})
export class ModifiermouvementComponent implements OnInit {
id : any ;
Mvt:any;

mvts= new Mouvements;


  constructor( private route:ActivatedRoute , private datamouvement:DatamouvementsService) { }

  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
    this.getdataedit(); 
  }
  
getdataedit(){
this.datamouvement.getmvtid(this.id).subscribe(res=>{
  this.Mvt=res;
  this.mvts=this.Mvt
});

}
updatemvt(){
  this.datamouvement.updatemvt(this.id, this.mvts).subscribe(res=>{
    this.getdataedit()
  })
}
}
