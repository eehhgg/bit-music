import { Component, OnInit } from '@angular/core';
import { Item } from '../item';
import { ItemService } from '../item.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {
  items: Item[];
  search: string;

  constructor(private itemService: ItemService) { }

  ngOnInit() {
  }

  getItems(itemType: string): void {
    if (!this.search) { return; }
    this.itemService.getItems(this.search, itemType)
        .subscribe(items => this.items = items);
  }
}
