import { Component, OnInit } from '@angular/core';
import { Data } from '@angular/router';
import { Bds } from '../bds';
import { DatabdsService } from '../service/databds.service';
@Component({
  selector: 'app-ajouterbds',
  templateUrl: './ajouterbds.component.html',
  styleUrls: ['./ajouterbds.component.css']
})
export class AjouterbdsComponent implements OnInit {

  constructor(private databdsservice:DatabdsService) { }
 bds= new Bds;
  ngOnInit(): void {
    if(!window.location.hash) {
      window.location.href = window.location.href + '#loaded';
      window.location.reload();
    }
  

  }
  insertbds(){
    this.databdsservice.insertbds(this.bds).subscribe(res=>console.log(res));
  }

}
