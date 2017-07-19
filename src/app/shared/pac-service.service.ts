import { Injectable } from '@angular/core';
import { Http,Response,Headers,RequestOptions } from '@angular/http';
import { PacjoinData } from './pacJoin-data';
import { PacData } from './pac-data';
import 'rxjs/Rx';

@Injectable()
export class PacServiceService {

private _url:string="https://knowledgeresident2.herokuapp.com/pacs/";
private _url1:string="https://knowledgeresident2.herokuapp.com/pacjoins/";
private _url2:string="https://knowledgeresident2.herokuapp.com/pacbydate/";


  constructor(private _http:Http) { }

getAllPac()
{
  return this._http.get(this._url).map((_res:Response)=>_res.json());
}
getPacJoin()
{
  return this._http.get(this._url1).map((_res:Response)=>_res.json());
}

getPacById(Id:number)
{
  return this._http.get(this._url+Id).map((_res:Response)=>_res.json());
}

getPacByDate(Id:any)
{
  return this._http.get(this._url2+Id).map((_res:Response)=>_res.json());
}

deletePac(Id:number){

  let header=new Headers({'Content-Type':'application/json'});
  let req=new RequestOptions({headers:header});
  return this._http.delete(this._url+Id,req);
}

addPac(item:PacData)
{
  let body=JSON.stringify(item);
  let header=new Headers({'Content-Type':'application/json'});
  let req=new RequestOptions({headers:header});
  return this._http.post(this._url,body,req)
  .map((res:Response)=>res.json());

}
updateSuggestionBook(item:PacData)
{
    let body=JSON.stringify(item);
    let header=new Headers({'Content-Type':'application/json'});
  let req=new RequestOptions({headers:header});
  return this._http.put(this._url+item.pk_pac_id,body,req)
  .map((res:Response)=>res.json());

}

deleteAllPac(item:PacjoinData[]){
  let body=JSON.stringify(item);
   let headers=new Headers({'Content-Type':'application/json'});
  let requestoption=new RequestOptions({headers:headers});
  return this._http.post(this._url+1,body,requestoption).map((res:Response)=>res.json());
  
}

}
