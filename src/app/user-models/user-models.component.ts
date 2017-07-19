import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserData } from '../shared/user-data';
import { UserjoinData } from '../shared/userjoin-data';
import { UserServiceService } from '../shared/user-service.service';

@Component({
  selector: 'app-user-models',
  templateUrl: './user-models.component.html',
  styleUrls: ['./user-models.component.css']
})
export class UserModelsComponent implements OnInit {
allUser:UserData[]=[];
allUserJoin:UserjoinData[]=[];
delarr:UserjoinData[]=[];
i:number;
  constructor(private _userservice:UserServiceService,private _router:Router) { }

  ngOnInit() {

    this._userservice.getUserJoin().subscribe(

      (data:UserjoinData[])=>{
        this.allUserJoin=data;
      },
      function(error)
      {
        console.log(error);
      },
      function()
      {
        console.log("view user");
      }
    );
  }





onCheck(item:UserjoinData)
{
  console.log("oncheck");
  
    if(this.delarr.find(x=>x==item))
    {
      this.delarr.splice(this.delarr.indexOf(item),1);  
    }
    else{
      this.delarr.push(item);
    }
  
   console.log(this.delarr);
}

  deleteAllUser()
    {
      
      this._userservice.deleteAllUser(this.delarr).subscribe(
        
          (data:any)=>{
            
            for(this.i=0 ; this.i<this.delarr.length ; this.i++)
            {
               if(this.allUserJoin.find(x=>x==this.delarr[this.i]))
                {
                   this.allUserJoin.splice(this.allUserJoin.indexOf(this.delarr[this.i]),1);
                }
            }
            this.delarr=[];
            
          },
          function(err){console.log(err);},
          function(){

            console.log("Complete");
          }
        
      );
    }
 


  deleteUser(item:UserData)

  {
    this._userservice.deleteUser(item.pk_user_id).subscribe(
      (data:any)=>{

        this.allUser.splice(this.allUser.indexOf(item),1);
      },
      function(error)
      {
        console.log(error);
      },
      function()
      { 
        console.log("delete user");
      }


    );
  }



updateUser(item:UserData){
  this._router.navigate(['/updateUser',item.pk_user_id]);
}

addUser()
{
  this._router.navigate(['/addUser',0]);
}


}



