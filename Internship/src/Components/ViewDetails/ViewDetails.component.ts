import { IEmpoyee } from 'src/ViewModels/IEmpoyee';
import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmployeeSevice } from 'src/Services/EmployeeSevice.service';

@Component({
  selector: 'app-ViewDetails',
  templateUrl: './ViewDetails.component.html',
  styleUrls: ['./ViewDetails.component.css']
})
export class ViewDetailsComponent implements OnInit {
emp!:IEmpoyee;
  constructor(private activeRoute:ActivatedRoute,
    private location:Location,
    private employeeService:EmployeeSevice

    ) { }

    GoBack()
    {
     this.location.back();
    }
  ngOnInit() {
    let prdId:string;
    this.activeRoute.paramMap.subscribe(params=>{
      prdId=params.get('pid')?.toString()??"";
      this.employeeService.GetById(prdId).subscribe(
        (response)=>{
          this.emp=response
        },
        (error)=>{console.log(error)}
      );
    });
  }
}
