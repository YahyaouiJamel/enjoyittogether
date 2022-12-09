
import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators
} from '@angular/forms';
import { Router } from '@angular/router';
import { CrudService } from 'src/app/services/crud.service';
import { UserService } from 'src/app/services/users.service';
import { ConfirmPasswordValidator } from "./ConfirmPasswordValidator";
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  public registerForm!: FormGroup;
  public errorMsg!: string;

  constructor(private fb: FormBuilder , private u:UserService, private r:Router) { }

  ngOnInit(): void {
    this.registerForm = this.fb.group({
  
      nom:['', [Validators.required, Validators.maxLength(20),Validators.minLength(2)]],
      prenom:['', [Validators.required, Validators.maxLength(20),Validators.minLength(2)]],
      login:['', [Validators.required, Validators.maxLength(20),Validators.minLength(5)]],
      cin:['', [Validators.required]],
      adresse:['', [Validators.required]],
      age:['', [Validators.required]],
      telephone:['', [Validators.required]],
      genre:['', [Validators.required]],   
      mail :['',[Validators.required, Validators.email]],
      password: ['', [
        Validators.required,
        //Validators.pattern('^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$'),
        Validators.minLength(6),
        Validators.maxLength(25),
      ]],
      confirmPassword: ["",Validators.required],
    
    },
    {
      validator: ConfirmPasswordValidator("password", "confirmPassword")
    });
    
  }
  add(f:any){
    this.u.addUser(f).subscribe(
      ()=>{
        console.log('succes')
        this.r.navigate(['/home'])
      }
    )
  }


  



  public setNotificationSetting(method: string): void {
    const phoneControl = this.registerForm.get('phone');
  
    if (method === 'text') {
      phoneControl!.setValidators(Validators.required);
    } else {
      phoneControl!.clearValidators();
    }
  
    phoneControl!.updateValueAndValidity();
  
  }



}


