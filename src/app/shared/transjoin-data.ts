export class TransjoinData {

constructor(public pk_user_id:number,public user_email_id:string,
    public user_pwd:string,
    public user_name:string,public user_type:number,public user_mobile_no:number,
    public user_address:string,public fk_city_id:number,public fk_pac_id:number,
    public pk_book_id:number,public book_name:string,public book_soh:number,public book_cover_pic:string,public book_isbn_no:number,public book_author_name1:string,public book_author_name2:string,public book_author_name3:string,public book_descr:string,public book_pub_year:string,public book_language:string,public book_is_active:number,public book_rating:number,public fk_cat_id:number,public fk_subcat_id:number
    ,public pk_trans_id:number,public trans_or_date:string,public trans_r_date:string,public fk_book_id:number
    )    {

    }


}
