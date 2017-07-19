import { Injectable } from '@angular/core';
import { Http,Response,Headers,RequestOptions } from '@angular/http';
import { ContactUsData } from './contactus-data';
import 'rxjs/Rx';

@Injectable()
export class ContactusServiceService {
private _url:string="https://knowledgeresident2.herokuapp.com/contacts/";
  constructor(private _http:Http) { }
getAllContact()
{
  return this._http.get(this._url).map((_res:Response)=>_res.json());
}

addContact(item:ContactUsData)
{
  let body=JSON.stringify(item);
  let header=new Headers({'Content-Type':'application/json'});
  let req=new RequestOptions({headers:header});
  return this._http.post(this._url,body,req)
  .map((res:Response)=>res.json());

}

}
