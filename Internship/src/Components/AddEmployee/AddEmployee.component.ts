import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EmployeeSevice } from 'src/Services/EmployeeSevice.service';
import { IEmployeePost } from 'src/ViewModels/IEmployeePost';

@Component({
  selector: 'app-AddEmployee',
  templateUrl: './AddEmployee.component.html',
  styleUrls: ['./AddEmployee.component.css']
})
export class AddEmployeeComponent implements OnInit {

  MyForm!:FormGroup;
  constructor(
    private fb:FormBuilder,
    private employeeService:EmployeeSevice,
    private router:Router,
    private location:Location) { }
  send(data:IEmployeePost)
  {
    console.log(data)
    this.employeeService.PostEmp(data).subscribe(
      (res)=>
      {
        this.employeeService.GetAll().subscribe(
          (res)=>
          {
            this.router.navigateByUrl("/Home");
          }
        );
      },
    );

  }
  GoBack()
  {
this.location.back();
  }
  ngOnInit() {
    this.MyForm=this.fb.group({
      FirstName:['',[Validators.required,Validators.minLength(3)]],
      LastName:['',[Validators.required,Validators.minLength(3)]],
      Country:['',[Validators.required,Validators.minLength(3)]],
    })
  }

}
