import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ApicallService {

  constructor(private http:HttpClient) {}
   
token:any;
header:any;


getbooks()
{

  this.token=localStorage.getItem('token')??"";  //Retreives token from localStorage
  this.header=new HttpHeaders({"Authorization":this.token}) // Creates Authorization Header using token


  return this.http.get<any>("http://127.0.0.1:8000/books",{"headers":this.header})  //sending api to get request with authorization header.
}

postbooks(data:any)
{
  this.token=localStorage.getItem('token')??"";
  this.header=new HttpHeaders({"Authorization":this.token})


  return this.http.post<any>("http://127.0.0.1:8000/books/",data,{"headers":this.header})
}

getbooksbyid(id:any)
{
  return this.http.get<any>(`http://127.0.0.1:8000/books/${id}`,{"headers":this.header})

}


deletebooksbyid(id:any)
{
  return this.http.delete<any>(`http://127.0.0.1:8000/books/${id}`,{"headers":this.header})
}

editbooksbyid(id:any,data:any)
{
  return this.http.put<any>(`http://127.0.0.1:8000/books/${id}/`,data,{"headers":this.header})
}

register(data:any)
{
  return this.http.post<any>("http://127.0.0.1:8000/user/",data)
}

login(data1:any)
{
  console.log(data1);
  return this.http.post<any>("http://localhost:8000/api-token-auth/",data1)
}

}
