export class BookJoinData {

constructor(public pk_book_id:number,public book_name:string,public book_soh:number,
public book_cover_pic:string,public book_isbn_no:number,public book_author_name1:string,
public book_author_name2:string,public book_author_name3:string,
public book_descr:string,public book_pub_year:string,public book_language:string,
public book_is_active:number,public book_rating:number,public fk_cat_id:number,
public fk_subcat_id:number,public pk_cat_id:number,public cat_name:string,
public pk_subcat_id:number,public subcat_name:string)
     {
         
     }

}
