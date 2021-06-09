import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../models/product';

@Pipe({
  name: 'filterPipe'
})
export class FilterPipePipe implements PipeTransform {

  transform(value: Product[], filterText:string): Product[] {
    filterText = filterText?filterText.toLocaleLowerCase():""
    return filterText?value
    .filter((p:Product)=>p.productName.toLocaleLowerCase()
    .indexOf(filterText)!==-1):value;//filtertext dolu mu doluysa productnameı küçült sonra filtertexti diziyi döndür
    //indexof bulamazsa -1 döndürür
    
  }

}
