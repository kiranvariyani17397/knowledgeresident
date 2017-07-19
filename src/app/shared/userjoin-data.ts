export class UserjoinData {

    constructor(public pk_user_id:number,public user_email_id:string,
    public user_pwd:string,
    public user_name:string,public user_type:number,public user_mobile_no:number,
    public user_address:string,public fk_city_id:number,public fk_pac_id:number,
    public pk_city_id:number,public city_name:string,public fk_state_id,
    public pk_pac_id:number,public pac_name:string,
    public pac_amount:number,public pac_desc:string,public pac_deposit:number,
    public pac_expr_date:string,
    public pac_or_date:string,public fk_user_id:number)    {

    }
}
