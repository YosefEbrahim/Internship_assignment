import { Edit_AddressComponent } from 'src/Components/Edit_Address/Edit_Address.component';
import { Add_AddressComponent } from 'src/Components/Add_Address/Add_Address.component';
import { EditComponent } from './../Components/Edit/Edit.component';
import { DeleteComponent } from './../Components/Delete/Delete.component';
import { ViewDetailsComponent } from './../Components/ViewDetails/ViewDetails.component';
import { HomeComponent } from './../Components/Home/Home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEmployeeComponent } from 'src/Components/AddEmployee/AddEmployee.component';
const routes: Routes = [
  {path:"Home",component:HomeComponent},
  {path:"AddAddress/:pid",component:Add_AddressComponent},
  {path:"AddEmployee",component:AddEmployeeComponent},
  {path:"ViewDetails/:pid",component:ViewDetailsComponent},
  {path:"Delete/:pid",component:DeleteComponent},
  {path:"Edit/:pid",component:EditComponent},
  {path:"EditAddress/:pid",component:Edit_AddressComponent},

  {path:"",redirectTo:"/Home",pathMatch:"full"},
  {path:"**",redirectTo:"/Home",pathMatch:"full"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
