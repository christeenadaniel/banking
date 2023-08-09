import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  dataString = "happy banking with us!!!"
  UserName  = "Username"
  Password = "Password"

  // login(){
  //   alert("Login button clicked")
  // }

  // unameChange(event:any){
  //   console.log(event.target.value);
    
  // }
  // pwdChange(event:any){
  //   console.log(event.target.value);
    
  // }
  login(a : any,b : any){
    console.log(a.value);
    console.log(b.value);
    
    
  }
}
