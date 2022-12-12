import { VoyageService } from './../../services/voyage.service';
import { Voyage } from './../../model/voyage';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content-front',
  templateUrl: './content-front.component.html',
  styleUrls: ['./content-front.component.css']
})
export class ContentFrontComponent implements OnInit {
Voyage : any;
  constructor(private voyageservice : VoyageService ) { }

  ngOnInit(): void {
    this.voyageservice.getvoyages().subscribe(
      (d)=>{
        this.Voyage=d;
        console.log(d);
      }
    )
  }

}
