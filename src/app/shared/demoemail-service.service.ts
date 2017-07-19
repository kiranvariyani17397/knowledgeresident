import { Injectable } from '@angular/core';
import { Http,Response,Headers,RequestOptions } from '@angular/http';
import { Demoemail } from './demoemail-data';
import 'rxjs/Rx';

@Injectable()
export class DemoemailServiceService {
private _url:string="https://knowledgeresident2.herokuapp.com/demoemails/";
  constructor(private _http:Http) { }

  Sendmail(item:Demoemail)
{
  let body=JSON.stringify(item);
  let header=new Headers({'Content-Type':'application/json'});
  let req=new RequestOptions({headers:header});
  return this._http.post(this._url,body,req)
  .map((res:Response)=>res.json());

}


}
