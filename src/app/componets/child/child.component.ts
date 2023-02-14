import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';



@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',

  styleUrls: ['./child.component.scss'],
})
export class ChildComponent implements OnInit {
  @Input() items: any[] = [];
  @Output() reordered = new EventEmitter<any[]>();

  formControls: FormControl[];

  constructor() {
    this.formControls = [];
  }

  ngOnInit() {
    this.formControls = this.items.map(() => new FormControl());
  }

  onReordered(items: any[]) {
    this.items = items;
    this.formControls = this.items.map(() => new FormControl());
    this.reordered.emit(this.items);
  }
}
