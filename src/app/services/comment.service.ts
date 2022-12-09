import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Commentaire } from '../model/Commentaire';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor( private http: HttpClient) { }
  commentsUrl='http://localhost:3000/commentaire';
  httpOptions = {
    headers: new HttpHeaders({
    'Content-Type': 'application/json'
    })
  }
 
  getComment():Observable<Commentaire[]>{
    return this.http.get<Commentaire[]>(this.commentsUrl);
  }
  addComment (comment: Commentaire): Observable<Commentaire> {
    //comment.photo = "https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(19).webp";
    comment.membre = "salima";
    comment.id_membre = 1;
    comment.voyage = "dddd";
    comment.id_voyage = 1;
    //comment.date = "6 nov";
    return this.http.post<Commentaire>(this.commentsUrl+'/add', comment,this.httpOptions);}
  deleteComment(id:any): Observable<any>{
      return this.http.delete<any>(this.commentsUrl+'/remove/'+id);
    }
  
  getCommentById(id:any):Observable<Commentaire>{
      return this.http.get<Commentaire>(this.commentsUrl+'/comment/'+id);
    }
  
  updateComment(id:any,comment: Commentaire): Observable<any>{
      return this.http.put(this.commentsUrl+'/update/'+id, comment,this.httpOptions);
    }
}
