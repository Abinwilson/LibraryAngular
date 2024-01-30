import { Component } from '@angular/core';
import{ Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

constructor(private route:Router){}  // Dependency injection

isAuthenticated=false;


ngOnInit()
{
  if('token' in localStorage)
  {
    this.isAuthenticated=true;
  }
  else
  {
    this.isAuthenticated=false;
  }
}


view()
{
  this.route.navigate(['viewbooks'])
}

logout()
{
  console.log("Before",localStorage.getItem('token'));
  localStorage.clear()
  console.log("After",localStorage.getItem('token'));
  this.ngOnInit();
}

}
