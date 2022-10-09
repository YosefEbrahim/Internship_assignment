import { Component, OnInit } from '@angular/core';
import { EmployeeSevice } from 'src/Services/EmployeeSevice.service';
import { IEmpoyee } from 'src/ViewModels/IEmpoyee';

@Component({
  selector: 'app-Home',
  templateUrl: './Home.component.html',
  styleUrls: ['./Home.component.css']
})
export class HomeComponent implements OnInit {
  Model!:IEmpoyee[];
  constructor(private employeeService:EmployeeSevice,) { }

  ngOnInit() {
    this.employeeService.GetAll().subscribe(
      (response)=>
      {
        console.log(response)
        this.Model=response
      }
    )
  }

}
