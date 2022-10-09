import { IAddressPost } from './../ViewModels/IAddressPost';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IAddress } from 'src/ViewModels/IAddress';

@Injectable({
  providedIn: 'root'
})
export class AddressService {

constructor(private httpclient:HttpClient) { }


GetById(Id:string):Observable<IAddress>
{
  return this.httpclient.get<IAddress>(`${environment.ApiUrlAddress}/${Id}`);
}

PostAdd(addr:IAddressPost):Observable<IAddressPost>{
  var addr2= this.httpclient.post<IAddressPost>(`${environment.ApiUrlAddress}`,addr);
   return addr2;
}
Remove(Id:string):Observable<IAddress>
{
  var addr2= this.httpclient.delete<IAddress>(`${environment.ApiUrlAddress}/${Id}`);
  return addr2;
}
Update(Id:string,addr:IAddressPost):Observable<IAddress>
{
  var addr2= this.httpclient.put<IAddress>(`${environment.ApiUrlAddress}/${Id}`,addr);
  return addr2;
}
}
