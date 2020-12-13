import { Pipe, PipeTransform } from '@angular/core';
import { product } from './model/product';

@Pipe({
  name: 'searchfilter'
})
export class SearchfilterPipe implements PipeTransform {

  transform(prod: product[],searchValue:string): product[] {
    if(!prod ||!searchValue)
    { return prod;
    }
    return prod.filter(product => product.title.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()));
  }

}
