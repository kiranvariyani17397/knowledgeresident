import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { StateData } from '../shared/state-data';
import { StateServiceService } from '../shared/state-service.service';
import { Subscription } from 'rxjs/Rx';


@Component({
  selector: 'app-addstate',
  templateUrl: './addstate.component.html',
  styleUrls: ['./addstate.component.css']
})
export class AddstateComponent implements OnInit {

public _subscription:Subscription;
public _pk_state_id:number;
public _state_name:string;
addState:StateData[]=[];
  constructor(public _stateservice:StateServiceService,public _acrouter:ActivatedRoute,public _router:Router) { }

  ngOnInit() {

  this._subscription=this._acrouter.params.subscribe(
    (params:any)=>{

      this._pk_state_id=params["pk_state_id"];
    }

  );

  if(this._pk_state_id==0)
  {
    this._stateservice.getStateById(this._pk_state_id).subscribe(

      (data:StateData[])=>{
        this.addState=data;
        this._state_name=this.addState[0].state_name;
      }
    );
  }
  else{
  this._stateservice.getStateById(this._pk_state_id).subscribe(

      (data:StateData[])=>{
          this.addState=data;
          this._state_name=this.addState[0].state_name;
      }

  );
  }
  }

addstate()
{

if(this._pk_state_id==0)
{
  this._stateservice.addState(new StateData(this._pk_state_id,this._state_name)).subscribe(

    (data:any)=>
    {
      this._router.navigate(['/allState']);
    },
    function(error)
    {

    },
    function()
    {
      console.log("add state");
    }

  );
}


else{

  this._stateservice.updateState(new StateData(this._pk_state_id,this._state_name)).subscribe(

    (data:any)=>
    {
      this._router.navigate(['/allState']);
      console.log(data);
    },
    function(error)
    {

    },
    function()
    {
      console.log("updated state");
    }

  );
}
}
}

