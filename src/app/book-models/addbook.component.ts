import { Component, OnInit ,ChangeDetectorRef} from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { BookData } from '../shared/book-data';
import { BookJoinData } from '../shared/bookjoin-data';
import { BookServiceService } from '../shared/book-service.service';
import { Subscription } from 'rxjs/Rx';
import { CategoryData } from '../shared/category-data';
import { SubcategoryData } from '../shared/subcategory-data';
import { CategoryServiceService } from '../shared/category-service.service';
import { SubcategoryServiceService } from '../shared/subcategory-service.service';


@Component({
  selector: 'app-addbook',
  templateUrl: './addbook.component.html',
  styleUrls: ['./addbook.component.css']
})
export class AddbookComponent implements OnInit {

 title = 'app works!';
  path='';
   public file_srcs: string[] = [];
  public debug_size_before: string[] = [];
  public debug_size_after: string[] = [];

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
public _pk_subcat_id:number;
photo:string;
addBook:BookData[]=[];
addBookJoin:BookJoinData[]=[];
allCategory:CategoryData[]=[];
allSubcategory:SubcategoryData[]=[];

  constructor(private changeDetectorRef: ChangeDetectorRef,public _bookservice:BookServiceService,public _categoryservice:CategoryServiceService,public _subcategoryservice:SubcategoryServiceService,public _acrouter:ActivatedRoute,public _router:Router) { }

fileChange(input){

  //alert("hello from fileChange");
  this.readFiles(input.files);
}
readFile(file, reader, callback){
  reader.onload = () => {
//alert("hello from readFile final");  
    callback(reader.result);
    this._book_cover_pic=reader.result;
    console.log(reader.result);
  }

  reader.readAsDataURL(file);
}
readFiles(files, index=0){
  // Create the file reader
  //alert("hello from readFiles");
  let reader = new FileReader();
  
  // If there is a file
  if(index in files){
//    alert("hello from if");  
    // Start reading this file
    this.readFile(files[index], reader, (result) =>{
      // Create an img element and add the image file data to it
      var img = document.createElement("img");
      img.src = result;
  
      // Send this img to the resize function (and wait for callback)
      this.resize(img, 250, 250, (resized_jpeg, before, after)=>{
        // For debugging (size in bytes before and after)
        this.debug_size_before.push(before);
        this.debug_size_after.push(after);
  
        // Add the resized jpeg img source to a list for preview
        // This is also the file you want to upload. (either as a
        // base64 string or img.src = resized_jpeg if you prefer a file). 
        this.file_srcs.push(resized_jpeg);
  
        // Read the next file;
        this.readFiles(files, index+1);
      });
    });
  }else{
    // When all files are done This forces a change detection
    this.changeDetectorRef.detectChanges();
  }
}
resize(img, MAX_WIDTH:number, MAX_HEIGHT:number, callback){
  // This will wait until the img is loaded before calling this function
  return img.onload = () => {

    // Get the images current width and height
    var width = img.width;
    var height = img.height;

    // Set the WxH to fit the Max values (but maintain proportions)
    if (width > height) {
        if (width > MAX_WIDTH) {
            height *= MAX_WIDTH / width;
            width = MAX_WIDTH;
        }
    } else {
        if (height > MAX_HEIGHT) {
            width *= MAX_HEIGHT / height;
            height = MAX_HEIGHT;
        }
    }

    // create a canvas object
    var canvas = document.createElement("canvas");

    // Set the canvas to the new calculated dimensions
    canvas.width = width;
    canvas.height = height;
    var ctx = canvas.getContext("2d");  

    ctx.drawImage(img, 0, 0,  width, height); 

    // Get this encoded as a jpeg
    // IMPORTANT: 'jpeg' NOT 'jpg'
    var dataUrl = canvas.toDataURL('image/jpeg');

    // callback with the results
    callback(dataUrl, img.src.length, dataUrl.length);
  };
}



  ngOnInit() {

this._categoryservice.getAllCategory().subscribe(
      (data:CategoryData[])=>{
          this.allCategory=data;          
          
      },
      function(error){
        console.log(error);
      },
      function(){
        console.log('category view');
      }
    );
   
this._subcategoryservice.getAllSubcategory().subscribe(
      (data:SubcategoryData[])=>{
          this.allSubcategory=data;          
          
      },
      function(error){
        console.log(error);
      },
      function(){
        console.log('subcategory view');
      }
    );
   



this._subscription=this._acrouter.params.subscribe(
    (params:any)=>{

      this._pk_book_id=params["pk_book_id"];
    }

  );

  if(this._pk_book_id==0)
  {
    this._bookservice.getBookById(this._pk_book_id).subscribe(

      (data:BookData[])=>{
        this.addBook=data;
        this._book_name=this.addBook[0].book_name;
        this._book_soh=this.addBook[0].book_soh;
        this._book_cover_pic=this.addBook[0].book_cover_pic;
        this._book_isbn_no=this.addBook[0].book_isbn_no;
        this._book_author_name1=this.addBook[0].book_author_name1;
        this._book_author_name2=this.addBook[0].book_author_name2;
        this._book_author_name3=this.addBook[0].book_author_name3;
        this._book_descr=this.addBook[0].book_descr;
        this._book_pub_year=this.addBook[0].book_pub_year;
        this._book_language=this.addBook[0].book_language;
        this._book_is_active=this.addBook[0].book_is_active;
        this._book_rating=this.addBook[0].book_rating;
        this._fk_cat_id=this.addBook[0].fk_cat_id;
        this._fk_subcat_id=this.addBook[0].fk_subcat_id;        
      }
    );
  }
  else{
  this._bookservice.getBookById(this._pk_book_id).subscribe(

      (data:BookData[])=>{
          this.addBook=data;
        this._book_name=this.addBook[0].book_name;
        this._book_soh=this.addBook[0].book_soh;
        this._book_cover_pic=this.addBook[0].book_cover_pic;
        this._book_isbn_no=this.addBook[0].book_isbn_no;
        this._book_author_name1=this.addBook[0].book_author_name1;
        this._book_author_name2=this.addBook[0].book_author_name2;
        this._book_author_name3=this.addBook[0].book_author_name3;
        this._book_descr=this.addBook[0].book_descr;
        this._book_pub_year=this.addBook[0].book_pub_year;
        this._book_language=this.addBook[0].book_language;
        this._book_is_active=this.addBook[0].book_is_active;
        this._book_rating=this.addBook[0].book_rating;
        this._fk_cat_id=this.addBook[0].fk_cat_id;
        this._fk_subcat_id=this.addBook[0].fk_subcat_id;        
      }

  );
  }


  }

addbook()
{

if(this._pk_book_id==0)
{
  this._bookservice.addBook(new BookData(this._pk_book_id,this._book_name,this._book_soh,this._book_cover_pic,this._book_isbn_no,this._book_author_name1,this._book_author_name2,this._book_author_name3,this._book_descr,this._book_pub_year,this._book_language,this._book_is_active,this._book_rating,this._fk_cat_id,this._fk_subcat_id)).subscribe(

    (data:any)=>
    {
      this._router.navigate(['/allBook']);
    },
    function(error)
    {

    },
    function()
    {
      console.log("add book");
    }

  );
}


else{

  
  this._bookservice.updateBook(new BookData(this._pk_book_id,this._book_name,this._book_soh,this._book_cover_pic,this._book_isbn_no,this._book_author_name1,this._book_author_name2,this._book_author_name3,this._book_descr,this._book_pub_year,this._book_language,this._book_is_active,this._book_rating,this._fk_cat_id,this._fk_subcat_id)).subscribe(


    (data:any)=>
    {
      this._router.navigate(['/allBook']);
      console.log(data);
    },
    function(error)
    {

    },
    function()
    {
      console.log("updated Book");
    }

  );
}
}

/*onClick(id:any)
{
    this._bookservice.getBookByCatId(id).subscribe(
      (data:SubcategoryData[])=>{
          this.allSubcategory=data;          
          
      },
      function(error){
        console.log(error);
      },
      function(){
        console.log('Sub category view');
      }
    );

}*/
}

