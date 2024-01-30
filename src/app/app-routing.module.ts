import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AddbooksComponent } from './addbooks/addbooks.component';
import { ViewbooksComponent } from './viewbooks/viewbooks.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { DetailComponent } from './detail/detail.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'viewbooks',component:ViewbooksComponent},
  {path:'addbooks',component:AddbooksComponent},
  {path:'register',component:RegisterComponent},
  {path:'login',component:LoginComponent},
  {path:'detail/:id',component:DetailComponent},
  {path:'edit/:id',component:AddbooksComponent},
  


  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
