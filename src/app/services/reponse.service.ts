import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Reponse } from '../model/Reponse';

@Injectable({
  providedIn: 'root'
})
export class ReponseService {

  constructor( private http: HttpClient) { }
  reponsesUrl='http://localhost:3000/reponse';
  httpOptions = {
    headers: new HttpHeaders({
    'Content-Type': 'application/json'
    })
  }
 
  getReponse():Observable<Reponse[]>{
    return this.http.get<Reponse[]>(this.reponsesUrl);
  }
  addReponse (reponse: Reponse): Observable<Reponse> {
    reponse.commentaire = "good voyage";
   // reponse.photo = "https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(19).webp";
    reponse.membre = "salima";
    reponse.id_membre= 1;
    reponse.id_commentaire=12;
    //reponse.date = "6 nov";
    return this.http.post<Reponse>(this.reponsesUrl+'/add', reponse,this.httpOptions);}
  deleteReponse(id:any): Observable<any>{
      return this.http.delete<any>(this.reponsesUrl+'/remove/'+id);
    }
  
  getReponseById(id:any):Observable<Reponse>{
      return this.http.get<Reponse>(this.reponsesUrl+'/reponse/'+id);
    }
  
  updateReponse(id:any,reponse: Reponse): Observable<any>{
      return this.http.put(this.reponsesUrl+'/update/'+id,reponse,this.httpOptions);
    }
}
