import { IAddressPost } from './../../ViewModels/IAddressPost';
import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AddressService } from 'src/Services/Address.service';
import { EmployeeSevice } from 'src/Services/EmployeeSevice.service';

@Component({
  selector: 'app-Add_Address',
  templateUrl: './Add_Address.component.html',
  styleUrls: ['./Add_Address.component.css']
})
export class Add_AddressComponent implements OnInit {
  MyForm!:FormGroup;
  prdId!: string;
  constructor(
    private fb:FormBuilder,
    private activeRoute: ActivatedRoute,
    private addressService:AddressService,
    private employeeService:EmployeeSevice,
    private router:Router,
    private location:Location) { }
  send(data:IAddressPost)
  {
   data.EmployeeId=this.prdId;
    this.addressService.PostAdd(data).subscribe(
      (res)=>
      {
        this.employeeService.GetAll().subscribe(
          (res)=>
          {
            this.router.navigateByUrl("/Edit/"+this.prdId);
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
    });
  }

}
