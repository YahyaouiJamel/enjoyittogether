import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Voyage } from '../model/voyage';

@Injectable({
  providedIn: 'root'
})
export class VoyageService {

  constructor(private http : HttpClient) { }
  
public addVoyage(voyage: any): Observable<any> {
  const url = 'https://localhost:3000/voyage/add';
  const urlJson = 'http://localhost:3000/voyages'
  return this.http.post<any>(url, voyage);
  }
 
public getvoyages(): Observable<any>{
  const urlJson = 'http://localhost:3000/voyages';
  const url = 'http://localhost:3000/voyages';
  return this.http.get(url);
 
    }

  public getvoyageBYId(id : String): Observable<Voyage>{
    const url = 'http://localhost:3000/voyage/'
    return this.http.get<Voyage>(url + id);
    
      }    

public DeleteVoyage(id:number):Observable<number>{
  const url = 'https://localhost:3000/voyage/remove/';
 /* let httpheaders=new HttpHeaders().set('Content-type','application/Json');
  let options={
    headers:httpheaders
  };
  */
 console.log(id);
  return this.http.delete<number>(url + id);
}

public update( voyage: Voyage): Observable<any> {
  const url = 'https://localhost:3000/voyage/update/';
  return this.http.put<any>( url + voyage.id_voyage, voyage);
}

  }

