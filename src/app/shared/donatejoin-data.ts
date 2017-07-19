export class DonatejoinData {

    constructor(public pk_donate_id:number,public donate_book_name:string,public donate_descr:String,public donate_type:number,public fk_user_id:number,public pk_user_id:number,public user_email_id:string,public user_pwd:string,public user_name:string,public user_type:number,public user_mobile_no:number,public user_address:string,public fk_city_id:number,public fk_pac_id:number)
     {
         
     }

}
