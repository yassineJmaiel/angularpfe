import { Component, OnInit } from '@angular/core';
import { Article } from '../article';
import { DatarticleService } from '../service/datarticle.service';

@Component({
  selector: 'app-ajouterarticle',
  templateUrl: './ajouterarticle.component.html',
  styleUrls: ['./ajouterarticle.component.css']
})
export class AjouterarticleComponent implements OnInit {
  Article= new Article;
  constructor(private DatarticleService:DatarticleService) { }

  ngOnInit(): void {
    if(!window.location.hash) {
      window.location.href = window.location.href + '#loaded';
      window.location.reload();
    }
  
}

  
  insertarticle(){
    
      this.DatarticleService.insertData(this.Article).subscribe(res=>console.log(res));
    }
  }


