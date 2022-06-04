import { Component, OnInit } from '@angular/core';
import { DatarticleService } from '../service/datarticle.service';

@Component({
  selector: 'app-listearticles',
  templateUrl: './listearticles.component.html',
  styleUrls: ['./listearticles.component.css']
})
export class ListearticlesComponent implements OnInit {
  


article:any;
  constructor(private DatarticleService:DatarticleService) { }

  ngOnInit(): void {
    
    this.getArticleData();
  }
  getArticleData(){
  this.DatarticleService.getdata().subscribe(res=>{
    this.article=res
    
  })
}

}
