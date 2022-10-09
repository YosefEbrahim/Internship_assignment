import { IAddress } from './../../ViewModels/IAddress';
import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeSevice } from 'src/Services/EmployeeSevice.service';
import { IEmpoyee } from 'src/ViewModels/IEmpoyee';

@Component({
  selector: 'app-Delete',
  templateUrl: './Delete.component.html',
  styleUrls: ['./Delete.component.css'],
})
export class DeleteComponent implements OnInit {
  emp!: IEmpoyee;
  address!:IAddress[];
  constructor(
    private activeRoute: ActivatedRoute,
    private location: Location,
    private router:Router,
    private employeeService: EmployeeSevice
  ) {}
  DeleteAction(Id : string)
  {
    this.employeeService.Remove(Id).subscribe(
      (res)=>{
        this.employeeService.GetAll().subscribe(
          (res)=>
          {
            this.router.navigateByUrl("/Home");
          }
        );
      }
    )
  }
  GoBack() {
    this.location.back();
  }
  ngOnInit() {
    let prdId: string;
    this.activeRoute.paramMap.subscribe((params) => {
      prdId = params.get('pid')?.toString() ?? '';
      this.employeeService.GetById(prdId).subscribe(
        (response) => {
          this.emp = response;
          this.address=response.Addresses;
                },
        (error) => {
          console.log(error);
        }
      );
    });
  }
}
