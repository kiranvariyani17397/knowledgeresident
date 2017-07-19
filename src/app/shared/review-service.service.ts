import { Injectable } from '@angular/core';
import { Http,Response,Headers,RequestOptions } from '@angular/http';
import { ReviewData } from './review-data';
import { ReviewJoinData } from './reviewjoin-data';
import 'rxjs/Rx';

@Injectable()


export class ReviewServiceService {
private _url:string="https://knowledgeresident2.herokuapp.com/revs/";
private _url1:string="https://knowledgeresident2.herokuapp.com/revjoins/";
  constructor(private _http:Http) { }
getAllRev()
{
  return this._http.get(this._url).map((_res:Response)=>_res.json());
}
getRevJoin()
{
  return this._http.get(this._url1).map((_res:Response)=>_res.json());
}

getRevById(Id:number)
{
  return this._http.get(this._url+Id).map((_res:Response)=>_res.json());
}
deleteRev(Id:number){

  let header=new Headers({'Content-Type':'application/json'});
  let req=new RequestOptions({headers:header});
  return this._http.delete(this._url+Id,req);
}


approveAllRev(item:ReviewJoinData[]){
  let body=JSON.stringify(item);
   let headers=new Headers({'Content-Type':'application/json'});
  let requestoption=new RequestOptions({headers:headers});
  return this._http.post(this._url1+3,body,requestoption).map((res:Response)=>res.json());
  
}



approveRev(Id:number,flag:number)
{
  let header=new Headers({'Content-Type':'application/json'});
  let req=new RequestOptions({headers:header});
  return this._http.put(this._url1+Id+flag,req);
}

}
