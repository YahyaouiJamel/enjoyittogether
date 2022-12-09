import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Avis } from '../model/Avis';

@Injectable({
  providedIn: 'root'
})
export class AvisService {

  constructor( private http: HttpClient) { }
  avisUrl='http://localhost:3000/avis';
  httpOptions = {
    headers: new HttpHeaders({
    'Content-Type': 'application/json'
    })
  }
 

  getAvis():Observable<Avis[]>{
    return this.http.get<Avis[]>(this.avisUrl);
  }
  addAvis (avis: Avis): Observable<Avis> {
   avis.membre="salima";
   avis.id_membre=1;
   //avis.valeur_avis=2;
    return this.http.post<Avis>(this.avisUrl+'/add', avis,this.httpOptions);}
  deleteAvis(id:any): Observable<any>{
      return this.http.delete<any>(this.avisUrl+'/remove/'+id);
    }
  
  getAvisById(id:any):Observable<Avis>{
      return this.http.get<Avis>(this.avisUrl+'/avi/'+id);
    }
  
  updateAvis(id:any,avis: Avis): Observable<any>{
      return this.http.put(this.avisUrl+'/update/'+id, avis,this.httpOptions);
    }
}
