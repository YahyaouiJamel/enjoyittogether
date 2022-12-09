import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Avis } from 'src/app/model/Avis';
import { AvisService } from 'src/app/services/avis.service';

@Component({
  selector: 'app-listavis',
  templateUrl: './listavis.component.html',
  styleUrls: ['./listavis.component.css']
})
export class ListavisComponent implements OnInit {
  listavis:Avis[]=[];
  constructor(private avisService: AvisService,private router: Router) { }

  ngOnInit(): void {
    this.avisService.getAvis().subscribe((data: Avis[])=>this.listavis=data);
  }
  delete(avis:Avis):void {
    this.avisService.deleteAvis(avis.id_avis).subscribe(res=>alert("Rate deleted successfully"));
  }

}
