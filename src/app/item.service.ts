import { Injectable } from '@angular/core';
import { Item } from './item';
import { ITEMS } from './mock-items';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor() { }

  getItems(search: string, itemType: string): Observable<Item[]> {
    //return of(ITEMS);
    search = search.toLowerCase();
    var filteredItems = [];
    for (var i = 0; i < ITEMS.length; i++) {
      if ( this.matches(ITEMS[i], search, itemType) ) {
        filteredItems.push( ITEMS[i] );
      }
    }
    return of(filteredItems);
  }

  matches(item: Item, search: string, itemType: string) {
    if ( itemType != 'all' && item.type != itemType ) { return false; }
    if ( item.name.toLowerCase().indexOf(search) >= 0 ) { return true; }
    if ( item.artist.toLowerCase().indexOf(search) >= 0 ) { return true; }
    return false;
  }

}
