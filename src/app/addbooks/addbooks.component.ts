import { Component } from '@angular/core';
import { ApicallService } from '../apicall.service';
import{ Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-addbooks',
  templateUrl: './addbooks.component.html',
  styleUrls: ['./addbooks.component.css']
})
export class AddbooksComponent {
  constructor(private postapi:ApicallService,private route:Router,private router:ActivatedRoute){}
data =
{
  'title':'',
  'author':'',
  'price':''
}
id:any;

ngOnInit()
{
  this.id=this.router.snapshot.paramMap.get('id')
  if(this.id){
    this.postapi.getbooksbyid(this.id).subscribe((res)=>
    {
      console.log(res);
      this.data=res;
    })
  }
}



onsubmit()
{
// Edit
  if (this.id)
  {
    this.postapi.editbooksbyid(this.id,this.data).subscribe((res) => 
    {
      console.log(res);
      this.route.navigate(['viewbooks'])})
  }


// Add
  else
  {
  console.log(this.data);

  this.postapi.postbooks(this.data).subscribe((res) => 
     {
       console.log(res);
       this.route.navigate(['viewbooks'])
     })
  }
}

}
