import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  items = [
    { title: 'Item 1', value: 1, checked: false },
    { title: 'Item 2', value: 2, checked: false },
    { title: 'Item 3', value: 3, checked: false },
    { title: 'Item 4', value: 4, checked: false },
    { title: 'Item 5', value: 5, checked: false },
  ];

  getItems() {
    return this.items;
  }

  updateOrder(reordered: any[]) {
    // Update order of items with mock data
    // Example: this.items = reordered;
  }
}
