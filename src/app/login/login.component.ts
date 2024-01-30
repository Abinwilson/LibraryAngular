import { Component } from '@angular/core';
import { ApicallService } from '../apicall.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private loginapi:ApicallService, private route:Router){}

  data1=
{
  'username':'',
  'password':'',
}


onsubmit()
{
  
  this.loginapi.login(this.data1).subscribe((res)=>
  {
    console.log(res);
    localStorage.setItem('token',"token "+res.token);
    console.log(localStorage.getItem('token'));
    this.route.navigate(['']);
  })
}

}
