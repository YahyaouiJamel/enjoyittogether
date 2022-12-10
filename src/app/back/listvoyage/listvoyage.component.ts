import { Component, OnInit, QueryList, ViewChildren } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { Voyage } from 'src/app/model/voyage';
import { ListVoyagesService } from 'src/app/services/listVoyagesService';
import { NgbdSortableHeader } from 'src/app/services/sortable.directive';
import { VoyageService } from 'src/app/services/voyage.service';

@Component({
  selector: 'app-listvoyage',
  templateUrl: './listvoyage.component.html',
  styleUrls: ['./listvoyage.component.css']
})
export class ListvoyageComponent implements OnInit {

  addVoyageForm!: FormGroup;
  voyages$: Observable<Voyage[]> ;
	total$: Observable<number>;
  @ViewChildren(NgbdSortableHeader) headers?: QueryList<NgbdSortableHeader>;
  voyage!: Voyage;
  showAutre : Boolean = false;

  constructor(private formBuilder:FormBuilder, public service: ListVoyagesService, public serviceBack : VoyageService) { 
    this.voyages$ = service.voyages$;
		this.total$ = service.total$;
  }

  ngOnInit(): void {
    this.addVoyageForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(5)]],
      description: ['', [Validators.required, Validators.minLength(5)]],
      date: ['', [Validators.required]],
      typeVoyage: [''],
      autreType : ['']
    });
  }

  onSort({ column, direction }: any) {
		// resetting other headers
		this.headers?.forEach((header) => {
			if (header.sortable !== column) {
				header.direction = '';
			}
		});

    this.service.sortColumn = column;
		this.service.sortDirection = direction;

  }

  public update (voyage : Voyage){
    this.serviceBack.update(voyage).subscribe(Response => {
    });
  }

 public deleteVoyage(id:number) {
    this.serviceBack.DeleteVoyage(id).subscribe(Response => {
    });
  }

  changetypeVoyage(event : any) {
    console.log(event?.target?.value)
    if (event?.target?.value == 'autre') {
      this.showAutre = true;
    }else {
      this.showAutre = false;  
    }

  }

}
