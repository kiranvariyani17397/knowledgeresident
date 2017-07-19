import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { UserData } from '../shared/user-data';
import { UserServiceService } from '../shared/user-service.service';
import { CityServiceService } from '../shared/city-service.service';
import { PacServiceService } from '../shared/pac-service.service';
import { CityData } from '../shared/city-data';
import { PacData } from '../shared/pac-data';
import { Subscription } from 'rxjs/Rx';




@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent implements OnInit {
 
public _subscription:Subscription;
public _pk_city_id:number;
public _pk_pac_id:number;
public _pk_user_id:number;
public _user_email_id:string;
public _user_pwd:string;
public _user_name:string;
public _user_type:number;
public _user_mobile_no:number;
public _user_address:string;
public _fk_city_id:number;
public _fk_pac_id:number;
public i:number;
allPac:PacData[]=[];
allCity:CityData[]=[];
addUser:UserData[]=[];


  
  constructor(public _userservice:UserServiceService,public _cityservice:CityServiceService,public _pacservice:PacServiceService,public _acrouter:ActivatedRoute,public _router:Router) { }

  ngOnInit() {

  this._cityservice.getAllCity().subscribe(
      (data:CityData[])=>{
          this.allCity=data; 
    
      },
      function(error){
        console.log(error);
      },
      function(){
        console.log('user view');
      }
    );
    


  this._pacservice.getAllPac().subscribe(
      (data:PacData[])=>{
          this.allPac=data; 
    
                    
      },
      function(error){
        console.log(error);
      },
      function(){
        console.log('pac view');
      }
    );



  this._subscription=this._acrouter.params.subscribe(
    (params:any)=>{

      this._pk_user_id=params["pk_user_id"];
    }

  );

  if(this._pk_user_id==0)
  {
    this._userservice.getUserById(this._pk_user_id).subscribe(

      (data:UserData[])=>{
        this.addUser=data;
        this._user_email_id=this.addUser[0].user_email_id;
        this._user_pwd=this.addUser[0].user_pwd;
        this._user_name=this.addUser[0].user_name;
        this._user_type=this.addUser[0].user_type;
        this._user_mobile_no=this.addUser[0].user_mobile_no;
        this._user_address=this.addUser[0].user_address;
        this._fk_city_id=this.addUser[0].fk_city_id;
        this._fk_pac_id=this.addUser[0].fk_pac_id;
      }
    );
  }
  else{
   this._userservice.getUserById(this._pk_user_id).subscribe(

      (data:UserData[])=>{
        this.addUser=data;
        this._user_email_id=this.addUser[0].user_email_id;
        this._user_pwd=this.addUser[0].user_pwd;
        this._user_name=this.addUser[0].user_name;
        this._user_type=this.addUser[0].user_type;
        this._user_mobile_no=this.addUser[0].user_mobile_no;
        this._user_address=this.addUser[0].user_address;
        this._fk_city_id=this.addUser[0].fk_city_id;
        this._fk_pac_id=this.addUser[0].fk_pac_id;
      }
    );
  }
  }

adduser()
{

if(this._pk_user_id==0)
{
  this._userservice.addUser(new UserData(this._pk_user_id,this._user_email_id,this._user_pwd,this._user_name,this._user_type,this._user_mobile_no,this._user_address,this._fk_city_id,this._fk_pac_id)).subscribe(

    (data:any)=>
    {
      this._router.navigate(['/allUser']);
    },
    function(error)
    { 

    },
    function()
    {
      console.log("add user");
    }

  );
}


else{

  
  this._userservice.updateUser(new UserData(this._pk_user_id,this._user_email_id,this._user_pwd,this._user_name,this._user_type,this._user_mobile_no,this._user_address,this._fk_city_id,this._fk_pac_id)).subscribe(

    (data:any)=>
    {
      this._router.navigate(['/allUser']);
    },
    function(error)
    {

    },
    function()
    {
      console.log("update user");
    }

  );
}
}
}


