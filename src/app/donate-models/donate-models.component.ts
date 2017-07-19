import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DonatejoinData } from '../shared/donatejoin-data';
import { DonateData } from '../shared/donate-data';
import { Demoemail } from '../shared/demoemail-data';
import { DonateServiceService } from '../shared/donate-service.service';
import { DemoemailServiceService } from '../shared/demoemail-service.service';



@Component({
  selector: 'app-donate-models',
  templateUrl: './donate-models.component.html',
  styleUrls: ['./donate-models.component.css']
})
export class DonateModelsComponent implements OnInit {
allDonateJoin:DonatejoinData[]=[];
allDonate:DonateData[]=[];
apparr:DonatejoinData[]=[];
alldemoemail:Demoemail[]=[];
_email:string;
_msg:string;
_sub:string;
  constructor(private _demoemailservice:DemoemailServiceService,private _donateServiceService:DonateServiceService,private _router:Router) { }

  ngOnInit() {

this._donateServiceService.getDonateBookJoin().subscribe(
      (data:DonatejoinData[])=>{
          this.allDonateJoin=data;          
      },
      function(error){
        console.log(error);
      },
      function(){
        console.log('done');
      }
    );


  }

approveDonateBook(item:DonatejoinData)
{
  this._donateServiceService.approveDonateBook(item.pk_donate_id,1)  
  .subscribe(
    (data:any)=>{
      this.allDonateJoin.splice(this.allDonateJoin.indexOf(item),1);
      
      
    },
    function(error){
      console.log(error);
    },
    function(){
      console.log("donate approve");
    }
  );

this._email=item.user_email_id;
  alert(this._email);
  this._msg="your donated book  has been accepted";
  this._sub="about donate request";
   this._demoemailservice.Sendmail(new Demoemail(this._msg,this._email,this._sub)).subscribe(

    (data:any)=>
    {
      alert("mail sent");
    },
    function(error)
    {

    },
    function()
    {
      console.log("mail sent");
    }

  );
 
}

 

 onCheck(item:DonatejoinData)
{
  console.log("oncheck");
  
    if(this.apparr.find(x=>x==item))
    {
      this.apparr.splice(this.apparr.indexOf(item),1);  
    }
    else{
      this.apparr.push(item);
    }
  
   console.log(this.apparr);
}

i:number;
approveAllDonate()
    {
            
      this._donateServiceService.approveAllDonateBook(this.apparr).subscribe(
        
          (data:any)=>{
            
            for(this.i=0 ; this.i<this.apparr.length ; this.i++)
            {
               if(this.allDonateJoin.find(x=>x==this.apparr[this.i]))
                {
                   this.allDonateJoin.splice(this.allDonateJoin.indexOf(this.apparr[this.i]),1);
                }
            }
            this.apparr=[];
            
          },
          function(err){console.log(err);},
          function(){

            console.log("Complete");
          }
        
      );
    }
 



disapproveDonateBook(item:DonatejoinData)
{
  this._donateServiceService.approveDonateBook(item.pk_donate_id,2)  
  .subscribe(
    (data:any)=>{
      this.allDonateJoin.splice(this.allDonateJoin.indexOf(item),1);
    },
    function(error){
      console.log(error);
    },
    function(){
      console.log("donate approve");
    }
  );
}
deleteDonate(item:DonatejoinData){
  this._donateServiceService.deleteDonateBook(item.pk_donate_id)
  .subscribe(
    (data:any)=>{
      this.allDonateJoin.splice(this.allDonateJoin.indexOf(item),1);
    },
    function(error){
      console.log(error);
    },
    function(){
      console.log("Donate delete");
    }
  );

}

updateDonate(item:DonateData){
  this._router.navigate(['/updateDonate',item.pk_donate_id]);
}

addDonate(item:DonateData)
{
  this._router.navigate(['/addDonate',0]);
}


}
