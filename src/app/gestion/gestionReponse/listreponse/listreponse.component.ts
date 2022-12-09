import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Reponse } from 'src/app/model/Reponse';
import { ReponseService } from 'src/app/services/reponse.service';

@Component({
  selector: 'app-listreponse',
  templateUrl: './listreponse.component.html',
  styleUrls: ['./listreponse.component.css']
})
export class ListreponseComponent implements OnInit {
  listreponse: Reponse[]=[];
  constructor(private reponseService: ReponseService,private router: Router) { }

  ngOnInit(): void {
    this.reponseService.getReponse().subscribe((data: Reponse[])=>this.listreponse=data);
  }
  delete(reponse:Reponse):void {
    this.reponseService.deleteReponse(reponse.id_newcommentaire).subscribe(res=>alert("Reponse deleted successfully"),);
  }
}
