import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { url } from 'inspector';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule,RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  email:any="";
  password:any="";
  constructor(private router:Router){}
  validate(){
    console.log(this.email + this.password)
    if(this.email=="admin@gmail.com" && this.password=="123"){
      this.router.navigateByUrl('/adminHome')
    }
    else{
      alert("enter valid email and password")
    }
  }

}
