import { Component } from '@angular/core';
import { ApicallService } from '../apicall.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-viewbooks',
  templateUrl: './viewbooks.component.html',
  styleUrls: ['./viewbooks.component.css']
})
export class ViewbooksComponent {
data:any;
constructor(private getapi:ApicallService,private route:Router){}

ngOnInit()
{
this.getapi.getbooks().subscribe((res) => {
   console.log(res);
   this.data=res;
  })
}

view(id:any)
{
 console.log(id);
 this.route.navigate(['detail',id])
}

edit(id:any)
{
  this.route.navigate(['edit',id])
}


delete(id:any)
{
console.log(id);
if(confirm("Are you sure you want to delete"))
{
  this.getapi.deletebooksbyid(id).subscribe((res) =>
  {
   console.log(res);
   this.ngOnInit()
  })
}
}



}
