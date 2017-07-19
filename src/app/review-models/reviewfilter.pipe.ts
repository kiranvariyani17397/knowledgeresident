import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reviewfilter'
})
export class ReviewfilterPipe implements PipeTransform {
review:any[]=[];
review1:any[]=[];

  transform(value: any, args?: any): any {
    if(args!='')
      {
      this.review=value.filter(res=>res.rev_comment.toLowerCase().startsWith(args.toLowerCase()));
      this.review1=value.filter(res=>res.user_name.toLowerCase().startsWith(args.toLowerCase()));
      return this.review.concat(this.review1);
      }
      else{
        return value;
      }
  }

}
