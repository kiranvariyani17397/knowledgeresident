import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PacjoinData } from '../shared/pacjoin-data';
import { PacData } from '../shared/pac-data';
import { PacServiceService } from '../shared/pac-service.service';

@Component({
  selector: 'app-pac-models',
  templateUrl: './pac-models.component.html',
  styleUrls: ['./pac-models.component.css']
})
export class PacModelsComponent implements OnInit {
allPacJoin:PacjoinData[]=[];
allPac:PacData[]=[];
delarr:PacjoinData[]=[];
i:number;


  constructor(private _pacServiceService:PacServiceService,private _router:Router) { }

  ngOnInit() {

    this._pacServiceService.getPacJoin().subscribe(
      (data:PacjoinData[])=>{
          this.allPacJoin=data;          
      },
      function(error){
        console.log(error);
      },
      function(){
        console.log('done');
      }
    );



  }


deletePac(item:PacjoinData){
  this._pacServiceService.deletePac(item.pk_pac_id)
  .subscribe(
    (data:any)=>{
      this.allPacJoin.splice(this.allPacJoin.indexOf(item),1);
    },
    function(error){
      console.log(error);
    },
    function(){
      console.log("category delete");
    }
  );



}
onCheck(item:PacjoinData)
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


 deleteAllPac()
    {
            console.log("deleteAllPac");
      this._pacServiceService.deleteAllPac(this.delarr).subscribe(
        
          (data:any)=>{
            
            for(this.i=0 ; this.i<this.delarr.length ; this.i++)
            {
               if(this.allPacJoin.find(x=>x==this.delarr[this.i]))
                {
                   this.allPacJoin.splice(this.allPacJoin.indexOf(this.delarr[this.i]),1);
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
 

updatePac(item:PacData){
  this._router.navigate(['/updatePac',item.pk_pac_id]);
}

addPac(item:PacData)
{
  this._router.navigate(['/addPac',0]);
}

}
