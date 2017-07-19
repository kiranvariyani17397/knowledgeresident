import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StateData } from '../shared/state-data';
import { StateServiceService } from '../shared/state-service.service';

@Component({
  selector: 'app-state-models',
  templateUrl: './state-models.component.html',
  styleUrls: ['./state-models.component.css']
})
export class StateModelsComponent implements OnInit {
allState:StateData[]=[];
delarr:StateData[]=[];
i:number;
  constructor(private _stateservice:StateServiceService,private _router:Router) { }

  ngOnInit() {
     this._stateservice.getAllState().subscribe(
      (data:StateData[])=>{
          this.allState=data;          
      },
      function(error){
        console.log(error);
      },
      function(){
        console.log('state view');
      }
    );


  }


  onCheck(item:StateData)
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

deleteState(item:StateData){
  this._stateservice.deleteState(item.pk_state_id)
  .subscribe(
    (data:any)=>{
      this.allState.splice(this.allState.indexOf(item),1);
    },
    function(error){
      console.log(error);
    },
    function(){
      console.log("state delete");
    }
  );
}


deleteAllState()
    {
      
      this._stateservice.deleteAllState(this.delarr).subscribe(
        
          (data:any)=>{
            
            for(this.i=0 ; this.i<this.delarr.length ; this.i++)
            {
               if(this.allState.find(x=>x==this.delarr[this.i]))
                {
                   this.allState.splice(this.allState.indexOf(this.delarr[this.i]),1);
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
 


updateState(item:StateData){
  this._router.navigate(['/updateState',item.pk_state_id]);
}

addState(item:StateData)
{
  this._router.navigate(['/addState',0]);
}
}
