import { Component, OnInit } from '@angular/core';
import { ContactusServiceService } from '../shared/contactus-service.service';
import { ContactUsData } from '../shared/contactus-data';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact-model',
  templateUrl: './contact-model.component.html',
  styleUrls: ['./contact-model.component.css']
})
export class ContactModelComponent implements OnInit {

allContact:ContactUsData[]=[];

  constructor(public _router:Router,public _contactservice:ContactusServiceService) { }

  ngOnInit() {
  
this._contactservice.getAllContact().subscribe(
      (data:ContactUsData[])=>{
          this.allContact=data;          
      },
      function(error){
        console.log(error);
      },
      function(){
        console.log('done');
      }
    );

}

}
