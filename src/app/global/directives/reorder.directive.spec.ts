import { ReorderDirective } from './reorder.directive';
import { ElementRef } from '@angular/core';

describe('ReorderDirective', () => {
  let directive: ReorderDirective;
  let el: ElementRef;
  let items: any[];

  beforeEach(() => {
    el = new ElementRef({});
    directive = new ReorderDirective(el);
    items = [{ id: 1, title: 'Item 1' }, { id: 2, title: 'Item 2' }, { id: 3, title: 'Item 3' }];
  });

  it('should create an instance', () => {
    expect(directive).toBeTruthy();
  });

  it('should store the index of the element being dragged on dragstart', () => {
    const event = { target: el.nativeElement.children[1] };
    directive.onDragStart(event);
    expect(directive.dragIndex).toEqual(1);
  });

  it('should reorder the elements on dragenter', () => {
    const event = { target: el.nativeElement.children[2] };
    directive.dragIndex = 1;
    directive.items = items;

    directive.reordered.subscribe((newItems: any[]) => {
      expect(newItems).toEqual([{ id: 1, title: 'Item 1' }, { id: 3, title: 'Item 3' }, { id: 2, title: 'Item 2' }]);
    });

    directive.onDragEnter(event);
  });
});
