import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserData } from '../shared/user-data';
import { UserServiceService } from '../shared/user-service.service';
//import { CoolLocalStorage } from 'angular2-cool-storage';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

msg:string;
_id:number;
_email_id:string;
_pwd:string;
validUser:UserData; 
//localstorage:CoolLocalStorage;

  constructor(private _userservice:UserServiceService,private _router:Router) 
  { 

    //this.localstorage=localstorage;
  }


  ngOnInit() {
  }
}
  /*validuser()
  {
        
    this._userservice.getValidUser(this._email_id,this._pwd).subscribe(

      (data)=>{
        console.log(data);
        if(data.length==1)
        {
          
    this.localstorage.setItem('email_id',this._email_id);
        //this._router.navigate(['/allUser']);
        alert("yes");
        }
 
      else
      {
        //this.msg="invalid";
        alert("no");
      }
  },      function(error){
        console.log(error);
      }
    );
 
    this.localstorage.getItem('email_id');
   
    }
    
  }*/


