import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs/Rx';
import { BookData } from '../shared/book-data';
import { BookJoinData } from '../shared/bookjoin-data';
import { BookServiceService } from '../shared/book-service.service';

@Component({
  selector: 'app-book-models',
  templateUrl: './book-models.component.html',
  styleUrls: ['./book-models.component.css']
})
export class BookModelsComponent implements OnInit {
allBook:BookData[]=[];
disBook:BookData[]=[];
allBookJoin:BookJoinData[]=[];
delarr:BookJoinData[]=[];
  public _subscription:Subscription;
  public _pk_book_id:number;
  public _book_name:string;
  public _book_soh:number;
  public _book_cover_pic:string;
  public _book_isbn_no:number;
  public _book_author_name1:string;
  public _book_author_name2:string;
  public _book_author_name3:string;
  public _book_descr:string;
  public _book_pub_year:string;
  public _book_language:string;
  public _book_is_active:number;
  public _book_rating:number;
  public _fk_cat_id:number;
  public _fk_subcat_id:number;
  public _pk_cat_id:number;
  public _cat_name:string;
  public _pk_subcat_id:number;
  public _subcat_name:string


  constructor(private _bookservice:BookServiceService,private _router:Router) { }

  ngOnInit() {
        this._bookservice.getBookJoin().subscribe(
      (data:BookJoinData[])=>{
          this.allBookJoin=data;          
      },
      function(error){
        console.log(error);
      },
      function(){
        console.log('Book view');
      }
    );

}


onCheck(item:BookJoinData)
{
    
    if(this.delarr.find(x=>x==item))
    {
      this.delarr.splice(this.delarr.indexOf(item),1);  
    }
    else{
      this.delarr.push(item);
    }
  
   console.log(this.delarr);
}

deleteBook(item:BookJoinData){
  this._bookservice.deleteBook(item)
  .subscribe(
    (data:any)=>{
      this.allBookJoin.splice(this.allBookJoin.indexOf(item),1);
    },
    function(error){
      console.log(error);
    },
    function(){
      console.log("Book delete");
    }
  );
}

i:number;
deleteAllBook()
    {
      
      this._bookservice.deleteAllBook(this.delarr).subscribe(
        
          (data:any)=>{
            
            for(this.i=0 ; this.i<this.delarr.length ; this.i++)
            {
               if(this.allBookJoin.find(x=>x==this.delarr[this.i]))
                {
                   this.allBookJoin.splice(this.allBookJoin.indexOf(this.delarr[this.i]),1);
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
 



updateBook(item:BookJoinData){
  this._router.navigate(['/updateBook',item.pk_book_id]);
}

addBook()
{
  this._router.navigate(['/addBook',0]);
}
bookbyid(id:any)
{
this._bookservice.getBookById(id).subscribe(
      (data:BookData[])=>{
          this.disBook=data;          
         console.log(this.disBook);
         
      },
      function(error){
      //  console.log(error);
      },
      function(){
      //  console.log('book by id view');
      }
    );
}

}





