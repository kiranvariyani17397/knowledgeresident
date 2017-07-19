import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'userfilter'
})
export class UserfilterPipe implements PipeTransform {
user:any[]=[];
user1:any[]=[];
  transform(value: any, args?: any): any {
    if(args!='')
      {
      this.user=value.filter(res=>res.pac_name.toLowerCase().startsWith(args.toLowerCase()));
      this.user1=value.filter(res=>res.user_name.toLowerCase().startsWith(args.toLowerCase()));
      return this.user.concat(this.user1);
      }
      else{
        return value;
      }
  }

}
