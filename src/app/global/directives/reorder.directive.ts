import { Directive, HostListener, ElementRef, Input, Output, EventEmitter } from '@angular/core';

@Directive({
  selector: '[appReorder]'
})
export class ReorderDirective {
  @Input() items: any[] = [];
  @Output() reordered = new EventEmitter<any[]>();

  private dragIndex: number = 0;

  constructor(private el: ElementRef) {}

  @HostListener('dragstart', ['$event'])
  onDragStart(event: DragEvent) {
    this.dragIndex = Array.from(this.el.nativeElement.children).indexOf(event.target as HTMLElement);
    (event.target as HTMLElement).style.border = '1px solid gray';
  }

  @HostListener('dragenter', ['$event'])
  onDragEnter(event: DragEvent) {
    (event.target as HTMLElement).style.backgroundColor = 'lightgray';
  }

  @HostListener('dragleave', ['$event'])
  onDragLeave(event: DragEvent) {
    (event.target as HTMLElement).style.backgroundColor = '';
  }

  @HostListener('dragend', ['$event'])
  onDragEnd(event: DragEvent) {
    (event.target as HTMLElement).style.backgroundColor = '';
    (event.target as HTMLElement).style.border = '';
  }

  @HostListener('drop', ['$event'])
  onDrop(event: DragEvent) {
    const dropIndex = Array.from(this.el.nativeElement.children).indexOf(event.target as HTMLElement);

    if (dropIndex !== this.dragIndex) {
      const items = [...this.items];
      const item = items.splice(this.dragIndex, 1)[0];
      items.splice(dropIndex, 0, item);
      this.reordered.emit(items);
    }

    (event.target as HTMLElement).style.backgroundColor = '';
    (event.target as HTMLElement).style.border = '';
  }
}
