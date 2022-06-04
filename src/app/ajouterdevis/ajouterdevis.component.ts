import { Component, OnInit } from '@angular/core';
import { DatadevisService} from 'src/app/service/datadevis.service';
import { Devis} from 'src/app/devis';

@Component({
  selector: 'app-ajouterdevis',
  templateUrl: './ajouterdevis.component.html',
  styleUrls: ['./ajouterdevis.component.css']
})
export class AjouterdevisComponent implements OnInit {
 
  devis= new Devis;

  constructor(private DataService: DatadevisService) { }

  ngOnInit(): void {
    if(!window.location.hash) {
      window.location.href = window.location.href + '#loaded';
      window.location.reload();
    }
  

  }



insertDevis(){
  this.DataService.insertData(this.devis).subscribe((res: any)=>{
    console.log(res);
  })

}
}
