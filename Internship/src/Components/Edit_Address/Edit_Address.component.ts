import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AddressService } from 'src/Services/Address.service';
import { EmployeeSevice } from 'src/Services/EmployeeSevice.service';
import { IAddress } from 'src/ViewModels/IAddress';
import { IAddressPost } from 'src/ViewModels/IAddressPost';
import { IEmpoyee } from 'src/ViewModels/IEmpoyee';

@Component({
  selector: 'app-Edit_Address',
  templateUrl: './Edit_Address.component.html',
  styleUrls: ['./Edit_Address.component.css']
})
export class Edit_AddressComponent implements OnInit {
  MyForm!:FormGroup;
  prdId!: string;
  addr!:IAddress;
  constructor(
    private fb:FormBuilder,
    private activeRoute: ActivatedRoute,
    private addressService:AddressService,
    private employeeService:EmployeeSevice,
    private router:Router,
    private location:Location) { }
  send(data:IAddressPost)
  {
    data.EmployeeId=this.addr.EmployeeId;
    this.addressService.Update(this.prdId,data).subscribe(
      (res)=>
      {
        this.employeeService.GetAll().subscribe(
          (res)=>
          {
            this.router.navigateByUrl("/Edit/"+this.addr.EmployeeId);
          }
        );
      },
      (err)=>
      {
        console.log(err);
      }
    );

  }
  GoBack()
  {
this.location.back();
  }
  ngOnInit() {
    this.MyForm=this.fb.group({
      City:['',[Validators.required,Validators.minLength(3)]],
      StreetAddress:['',[Validators.required,Validators.minLength(3)]],
      Phone:['',[Validators.required,Validators.minLength(3)]],
    })
    this.activeRoute.paramMap.subscribe((params) => {
      this.prdId = params.get('pid')?.toString() ?? '';
      this.addressService.GetById(this.prdId).subscribe(
        (response) => {
          this.addr = response;
          console.log(response)
          this.MyForm=this.fb.group({
            City:[`${this.addr.City}`,[Validators.required,Validators.minLength(3)]],
            StreetAddress:[`${this.addr.StreetAddress}`,[Validators.required,Validators.minLength(3)]],
            Phone:[`${this.addr.Phone}`,[Validators.required,Validators.minLength(3)]],
            EmployeeId:[`${this.addr.EmployeeId}`],
          });
        },
        (error) => {
          console.log(error);
        }
      );
    });
  }

}
