import { IEmployeePost } from './../../ViewModels/IEmployeePost';
import {FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeSevice } from 'src/Services/EmployeeSevice.service';
import { IEmpoyee } from 'src/ViewModels/IEmpoyee';
import { AddressService } from 'src/Services/Address.service';

@Component({
  selector: 'app-Edit',
  templateUrl: './Edit.component.html',
  styleUrls: ['./Edit.component.css']
})
export class EditComponent implements OnInit {
  MyForm!:FormGroup;
  emp!: IEmpoyee;
  constructor(
    private activeRoute: ActivatedRoute,
    private location: Location,
    private router:Router,
    private employeeService: EmployeeSevice,
    private addressService:AddressService,
    private fb:FormBuilder,
  ) {}
  send(data:IEmployeePost)
  {
    data.Country=this.emp.Country;
    data.Id=this.emp.Id
    console.log(data)
    this.employeeService.Update(this.emp.Id,data).subscribe(
      (res)=>
      {
        this.employeeService.GetAll().subscribe(
          (res)=>
          {
            this.router.navigateByUrl("/Home");
          }
        );
      },
      (err)=>
      {
        console.log(err)
      }
    );

  }
  DeleteAddterss(Id:string)
  {
    this.addressService.Remove(Id).subscribe(
      (res)=>
      {
        console.log(Id)
        this.employeeService.GetById(this.emp.Id).subscribe(
          (res)=>
          {
            this.emp=res;
          }
        );
      },
      (err)=>
      {
        console.log(err)
      }
    );
  }
  GoBack() {
    this.location.back();
  }
  ngOnInit() {
    this.MyForm=this.fb.group({
      FirstName:['',[Validators.required,Validators.minLength(3)]],
      LastName:['',[Validators.required,Validators.minLength(3)]],
    })
    let prdId: string;
    this.activeRoute.paramMap.subscribe((params) => {
      prdId = params.get('pid')?.toString() ?? '';
      this.employeeService.GetById(prdId).subscribe(
        (response) => {
          this.emp = response;
          console.log(this.emp)
          this.MyForm=this.fb.group({
            FirstName:[`${this.emp.FirstName}`,[Validators.required,Validators.minLength(3)]],
            LastName:[`${this.emp.LastName}`,[Validators.required,Validators.minLength(3)]],
          })
        },
        (error) => {
          console.log(error);
        }
      );
    });
  }

}
