import { EditComponent } from './../Components/Edit/Edit.component';
import { HomeComponent } from './../Components/Home/Home.component';
import { FooterComponent } from './../Components/Footer/Footer.component';
import { HeaderComponent } from './../Components/Header/Header.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Add_AddressComponent } from 'src/Components/Add_Address/Add_Address.component';
import { Edit_AddressComponent } from 'src/Components/Edit_Address/Edit_Address.component';
import { AddEmployeeComponent } from 'src/Components/AddEmployee/AddEmployee.component';
import { DeleteComponent } from 'src/Components/Delete/Delete.component';
import { ViewDetailsComponent } from 'src/Components/ViewDetails/ViewDetails.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AddEmployeeComponent,
    EditComponent,
    Add_AddressComponent,
    Edit_AddressComponent,
    DeleteComponent,
    ViewDetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
