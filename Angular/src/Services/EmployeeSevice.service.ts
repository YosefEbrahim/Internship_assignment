import { IEmployeePost } from './../ViewModels/IEmployeePost';
import { IEmpoyee } from './../ViewModels/IEmpoyee';
import { environment } from './../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeSevice{

constructor(private httpclient:HttpClient) { }


GetAll():Observable<IEmpoyee[]>
{
  return this.httpclient.get<IEmpoyee[]>(`${environment.ApiUrl}`);
}
GetById(Id:string):Observable<IEmpoyee>
{
  return this.httpclient.get<IEmpoyee>(`${environment.ApiUrl}/${Id}`);
}
PostEmp(emp:IEmployeePost):Observable<IEmployeePost>{
  var emp2= this.httpclient.post<IEmployeePost>(`${environment.ApiUrl}`,emp);
   return emp2;
}
Remove(Id:string):Observable<IEmpoyee>
{
  var emp2= this.httpclient.delete<IEmpoyee>(`${environment.ApiUrl}/${Id}`);
  return emp2;
}
Update(Id:string,emp:IEmployeePost):Observable<IEmpoyee>
{
  var emp2= this.httpclient.put<IEmpoyee>(`${environment.ApiUrl}/${Id}`,emp);
  return emp2;
}

}
