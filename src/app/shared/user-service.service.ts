import { Injectable } from '@angular/core';
import { Http,RequestOptions,Response,Headers } from '@angular/http';
import { UserData } from './user-data';
import { UserjoinData } from './userjoin-data';
import 'rxjs/Rx';
@Injectable()
export class UserServiceService {

private _url:string="https://knowledgeresident2.herokuapp.com/users/";
private _url1:string="https://knowledgeresident2.herokuapp.com/userjoins/";
  constructor(private _http:Http) { }


getAllUser()
{
  return this._http.get(this._url).map((_res:Response)=>_res.json());
}

getUserJoin()
{
  return this._http.get(this._url1).map((_res:Response)=>_res.json());
}

getUserById(Id:number)
{
  return this._http.get(this._url+Id).map((_res:Response)=>_res.json());
}

deleteUser(Id:number)
{
  let header=new Headers({'Content-Type':'application/json'});
  let req=new RequestOptions({headers:header});
  return this._http.delete(this._url+Id,req);
}

addUser(item:UserData)
{
  let body=JSON.stringify(item);
  let header=new Headers({'Content-Type':'application/json'});
  let req=new RequestOptions({headers:header});
  return this._http.post(this._url,body,req)
  .map((res:Response)=>res.json());

}

getValidUser(email_id:string,pwd:string)
{
  let body=JSON.stringify({user_email_id:email_id,user_pwd:pwd});
   let headers=new Headers({'Content-Type':'application/json'});
  let requestoption=new RequestOptions({headers:headers});
  return this._http.post(this._url1,body,requestoption).map((_res:Response)=>_res.json());
 
}


updateUser(item:UserData)
{
    let body=JSON.stringify(item);
    let header=new Headers({'Content-Type':'application/json'});
  let req=new RequestOptions({headers:header});
  return this._http.put(this._url+item.pk_user_id,body,req)
  .map((res:Response)=>res.json());

}

deleteAllUser(item:UserjoinData[]){
  let body=JSON.stringify(item);
   let headers=new Headers({'Content-Type':'application/json'});
  let requestoption=new RequestOptions({headers:headers});
  return this._http.post(this._url+1,body,requestoption).map((res:Response)=>res.json());
  
}


}
