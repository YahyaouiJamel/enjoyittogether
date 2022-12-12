import { Component, OnInit } from '@angular/core';
import { ProfilService } from 'src/app/services/profil.service';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {

  constructor(private ListProfil : ProfilService) { }
  Profil : any;
  ngOnInit(): void {
    this.ListProfil.getProfilById(74).subscribe(
      (d)=>{
        this.Profil=d;
        console.log(d);
      }
    )
  }

}
