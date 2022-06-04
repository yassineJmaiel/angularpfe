import { Component, OnInit } from '@angular/core';
import { Bdr } from '../bdr';
import { DatabdrService } from '../service/databdr.service';
@Component({
  selector: 'app-ajouterbdr',
  templateUrl: './ajouterbdr.component.html',
  styleUrls: ['./ajouterbdr.component.css']
})
export class AjouterbdrComponent implements OnInit {

  constructor(private databdrservice:DatabdrService) { }
bdr = new Bdr;
  ngOnInit(): void {
    if(!window.location.hash) {
      window.location.href = window.location.href + '#loaded';
      window.location.reload();
    }
  

  }
  insertbdr(){
    this.databdrservice.insertbdr(this.bdr).subscribe(res=>console.log(res));
  }
}
