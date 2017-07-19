import { Injectable } from '@angular/core';
import { Http,RequestOptions,Response,Headers } from '@angular/http';
import { TransData } from './trans-data';
import 'rxjs/Rx';

@Injectable()
export class TransServiceService {
private _url:string="https://knowledgeresident2.herokuapp.com/trans/";
private _url1:string="https://knowledgeresident2.herokuapp.com/tranjoins/";
private _url2:string="https://knowledgeresident2.herokuapp.com/trandesc/";

private _url3:string="https://knowledgeresident2.herokuapp.com/transbydate/";
private _url4:string="https://knowledgeresident2.herokuapp.com/transrequest/";
private _url5:string="https://knowledgeresident2.herokuapp.com/transreturn/";

  constructor(private _http:Http) { }

getAllTrans()
{
  return this._http.get(this._url).map((_res:Response)=>_res.json());
}

getTransJoin()
{
  return this._http.get(this._url1).map((_res:Response)=>_res.json());
}
getTransDesc()
{
  return this._http.get(this._url2).map((_res:Response)=>_res.json());
}
getAllTransRequest(x:string)
{
  return this._http.get(this._url4+x).map((_res:Response)=>_res.json());
}

getAllTransReturn(x:string)
{
  return this._http.get(this._url5+x).map((_res:Response)=>_res.json());
}

getTransById(Id:number)
{
  return this._http.get(this._url+Id).map((_res:Response)=>_res.json());
}

getTransByDate(Id:string)
{
  return this._http.get(this._url3+Id).map((_res:Response)=>_res.json());
}

deleteTrans(Id:number)
{
  let header=new Headers({'Content-Type':'application/json'});
  let req=new RequestOptions({headers:header});
  return this._http.delete(this._url+Id,req);
}


}
