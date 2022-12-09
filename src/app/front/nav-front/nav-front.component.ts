import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-front',
  templateUrl: './nav-front.component.html',
  styleUrls: ['./nav-front.component.css']
})
export class NavFrontComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit(): void {
  }
  islogin(){
    return localStorage.getItem('token')
   }

   logout(){
    localStorage.removeItem('token')
    this.route.navigate(['/home'])
  } 
}
