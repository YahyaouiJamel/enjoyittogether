import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ProfilService {

  constructor(private http:HttpClient) {

                  }
    ListProfil(){ 
      return this.http.get('http://localhost:3000/users')
             }
    updateProfil(data:any,id:any){
      return this.http.put('http://localhost:3000/users/update'+id,data)

    } 
    getProfilById(id:any){
    return this.http.get('http://localhost:3000/users/'+id)
  }

   }
