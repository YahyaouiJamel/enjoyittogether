import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  AbstractControl,
  ValidatorFn,
  FormArray
} from '@angular/forms';
import { UserService } from 'src/app/services/users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  dataRecived:any;
  messageerror:any;
  public registerForm!: FormGroup;
  public errorMsg!: string;
  
  constructor(private fb: FormBuilder ,private userservice :UserService,private route:Router) { 

    console.log(this.userservice.isloggedin)
  
  }

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      mail:['', [Validators.required,]],
      password:['', [Validators.required,]],


    })
  }

  saveData(){
    let data=this.registerForm.value
    this.userservice.Login(data).subscribe({
       next: (response)=>{
      this.dataRecived=response
      this.userservice.savedataprofil(this.dataRecived.token,this.dataRecived.role)
     this.route.navigate(['/home'])
      },error: (err: HttpErrorResponse) => {
        this.messageerror = "email/password Inccorect";
         }
      })
    }

}
