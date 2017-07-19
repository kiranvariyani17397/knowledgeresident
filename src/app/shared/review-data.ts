export class ReviewData {

    constructor(public pk_rev_id:number,public rev_comment:string,public rev_flag:number,
    public rev_rating:number,public fk_book_id:number,public fk_user_id:number)
     {
         
     }

}
