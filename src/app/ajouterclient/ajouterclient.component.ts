import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ajouterclient',
  templateUrl: './ajouterclient.component.html',
  styleUrls: ['./ajouterclient.component.css']
})
export class AjouterclientComponent implements OnInit {

  constructor(private router:Router) { 
   
  }

  ngOnInit(): void {

      if(!window.location.hash) {
        window.location.href = window.location.href + '#loaded';
        window.location.reload();
      }
    
  }

}
