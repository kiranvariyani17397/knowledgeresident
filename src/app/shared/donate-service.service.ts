import { Injectable } from '@angular/core';
import { Http,Response,Headers,RequestOptions } from '@angular/http';
import { DonateData } from './donate-data';
import { DonatejoinData } from './donatejoin-data';
import 'rxjs/Rx';



@Injectable()
export class DonateServiceService {
private _url:string="https://knowledgeresident2.herokuapp.com/donates/";
private _url1:string="https://knowledgeresident2.herokuapp.com/donatejoins/";


  constructor(private _http:Http) { }

getAllDonateBook()
{
  return this._http.get(this._url).map((_res:Response)=>_res.json());
}

approveDonateBook(Id:number,flag:number)
{
  let header=new Headers({'Content-Type':'application/json'});
  let req=new RequestOptions({headers:header});
  return this._http.put(this._url1+Id+flag,req);
}

getDonateBookJoin()
{
  return this._http.get(this._url1).map((_res:Response)=>_res.json());
}

getDonateBookById(Id:number)
{
  return this._http.get(this._url+Id).map((_res:Response)=>_res.json());
}
deleteDonateBook(Id:number){

  let header=new Headers({'Content-Type':'application/json'});
  let req=new RequestOptions({headers:header});
  return this._http.delete(this._url+Id,req);
}

addDonateBook(item:DonateData)
{
  let body=JSON.stringify(item);
  let header=new Headers({'Content-Type':'application/json'});
  let req=new RequestOptions({headers:header});
  return this._http.post(this._url,body,req)
  .map((res:Response)=>res.json());

}
updateDonateBook(item:DonateData)
{
    let body=JSON.stringify(item);
    let header=new Headers({'Content-Type':'application/json'});
  let req=new RequestOptions({headers:header});
  return this._http.put(this._url+item.pk_donate_id,body,req)
  .map((res:Response)=>res.json());

}

deleteAllDonateBook(item:DonatejoinData[]){
  let body=JSON.stringify(item);
   let headers=new Headers({'Content-Type':'application/json'});
  let requestoption=new RequestOptions({headers:headers});
  return this._http.post(this._url+1,body,requestoption).map((res:Response)=>res.json());
  
}


approveAllDonateBook(item:DonatejoinData[]){
  let body=JSON.stringify(item);
   let headers=new Headers({'Content-Type':'application/json'});
  let requestoption=new RequestOptions({headers:headers});
  return this._http.post(this._url1+3,body,requestoption).map((res:Response)=>res.json());
  
}



}
