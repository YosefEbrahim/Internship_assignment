import { IAddress } from './IAddress';
export interface IEmpoyee {
  Id:string,
  FirstName:string,
  LastName:string,
  CreatedDate:Date,
  Country:string,
  Addresses: IAddress[]
}
