import { Component, OnInit } from '@angular/core';
import { Commentaire } from 'src/app/model/Commentaire';
import { Reponse } from 'src/app/model/Reponse';
import { Voyage } from 'src/app/model/voyage';
import { VoyageService } from 'src/app/services/voyage.service';

@Component({
  selector: 'app-deals-front',
  templateUrl: './deals-front.component.html',
  styleUrls: ['./deals-front.component.css']
})
export class DealsFrontComponent implements OnInit {
  public gfg = true;
  comment : Commentaire=new Commentaire();
  reponse : Reponse=new Reponse();

  constructor(private voyageService: VoyageService) { }

  VoyageList : any ;

  ngOnInit(): void {
    this.voyageService.getvoyages().subscribe(
      (d)=>{
        this.VoyageList=d;
        console.log(d);
      }
    )
    }
  
    public deleteVoyage(id : number) {
      this.voyageService.DeleteVoyage(id).subscribe( Response => {
        console.log(Response);
      });
    }
  
    public updateVoyage( voyage : Voyage) {
      this.voyageService.update(voyage).subscribe( Response => {
        console.log(Response);
      });
    }
  
  
  }


