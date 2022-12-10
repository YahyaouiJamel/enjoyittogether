import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Voyage } from 'src/app/model/voyage';
import { VoyageService } from 'src/app/services/voyage.service';

@Component({
  selector: 'app-addvoyage',
  templateUrl: './addvoyage.component.html',
  styleUrls: ['./addvoyage.component.css']
})
export class AddvoyageComponent implements OnInit {

  addVoyageForm!: FormGroup;
  voyage!: Voyage;
  showAutre : Boolean = false;

  constructor(private formBuilder:FormBuilder, private voyageService : VoyageService) { }

  ngOnInit(): void {
    this.addVoyageForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(5)]],
      description: ['', [Validators.required, Validators.minLength(5)]],
      date: ['', [Validators.required]],
      typeVoyage: [''],
      autreType : ['']
    });
  }

  onSubmitForm() {
   
    const voyage  = {
      name : this.addVoyageForm.value.name ,
      description : this.addVoyageForm.value.description ,
      date : this.addVoyageForm.value.date,
      typeVoyage : this.addVoyageForm.value.typeVoyage
    };

   
    this.voyageService.addVoyage(voyage).subscribe( Response => {
      console.log(Response);
     });
    }

    /*this.http.post('http://localhost:3000/voyages', {
      "name": this.addVoyageForm.value.name,
      "description": this.addVoyageForm.value.description,
      "date": this.addVoyageForm.value.date,
      "typeVoyage": this.addVoyageForm.value.typeVoyage
    })
    .subscribe(Response => {
      console.log(Response);
    });
  
  }
   */
  changetypeVoyage(event : any) {
    console.log(event?.target?.value)
    if (event?.target?.value == 'autre') {
      this.showAutre = true;
    }else {
      this.showAutre = false;  
    }

  }

}
