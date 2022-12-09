import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JwtHelperService } from "@auth0/angular-jwt";
import { User } from '../model/User';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  Profil={
    role:''
  }
  helper= new JwtHelperService();
  constructor(private httpService: HttpClient) { }
  isloggedin:boolean=false;
  getrole(){
    let token:any =localStorage.getItem('token')
    let decodetoken= this.helper.decodeToken(token)
    return decodetoken.role
   }
  Login(data:any){
    return this.httpService.post('http://localhost:3000/user/login',data)
    
    }
   savedataprofil(token:any,role:any){
    localStorage.setItem('token', JSON.stringify(token))
  
    this.Profil.role=role
    this.isloggedin=true;
   }
   loggedIn(){
    let token:any=localStorage.getItem('token')
  
    if (!localStorage.getItem('token')){
      return false;
    }
    
    return true
   }

  Register(data:any){
    return this.httpService.post('http://localhost:3000/user/register',data)

  }
  //form the backend Side
  getAllUser(){
    return this.httpService.get<User[]>('http://localhost:3000/user/fetch')
  }
  addUser(user: User){
    return this.httpService.post('http://localhost:3000/user/register',user)
  }
  deleteUser(id_membre:Number){
    return this.httpService.delete('http://localhost:3000/user/removeuser/'+id_membre)
  }
  updateUser(user: User){
    return this.httpService.put('http://localhost:3000/user/updateuser/'+user.id_membre,user)
  }
  getById(id_membre:Number){
    return this.httpService.get<User>('http://localhost:3000/user/user/'+id_membre)
  }
}