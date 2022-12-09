import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Avis } from 'src/app/model/Avis';
import { AvisService } from 'src/app/services/avis.service';

@Component({
  selector: 'app-list-rate',
  templateUrl: './list-rate.component.html',
  styleUrls: ['./list-rate.component.css']
})
export class ListRateComponent implements OnInit {

  listavis:Avis[]=[];
  constructor(private avisService: AvisService,private router: Router) { }

  ngOnInit(): void {
    this.avisService.getAvis().subscribe((data: Avis[])=>this.listavis=data);
  }
  delete(avis:Avis):void {
    this.avisService.deleteAvis(avis.id_avis).subscribe(res=>alert("Rate deleted successfully"));
  }

}
