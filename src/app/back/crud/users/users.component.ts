import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/model/User';
import { UserService } from 'src/app/services/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  idt:any;
  users:any;
  
  id:any;
nom:any;
prenom:any;
  constructor(private u:UserService,private r:Router, private userservice:UserService,private ac:ActivatedRoute,private s:UserService ) { }

  ngOnInit(): void {
    this.userservice.getAllUser().subscribe(
      (d)=>{
        this.users=d;
        console.log(d);
      }
    )
   
    // this.s.getUserById(this.id).subscribe(
    //   (d)=>{
    //     this.users=d;
    //     this.nom=this.users.nom;
    //     this.prenom=this.users.prenom;

    //   }
    // )

}
  add(f:any){
    this.u.addUser(f).subscribe(
      ()=>{
        console.log('succes')
        this.r.navigate(['../crud'])
      }
    )
  }
  delete(user:User):void{
    //this.idt=this.ac.snapshot.params['id'];
    this.userservice.deleteUser(user.id_membre).subscribe
      (res=>alert("Commentaire deleted successfully"));}

  update(f:any){
    // this.userservice.updateUser(f,this.ac.snapshot.params['id']).subscribe(
    //   ()=>{console.log('Updated !');}
    // )
  }
  //get user by id

}
