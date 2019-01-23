import { Directive, ElementRef, HostListener, Input, Output, EventEmitter } from '@angular/core';

@Directive({
  selector: '[appInfinityScroll]'
})
export class InfinityScrollDirective {

  @Input() length;
  @Output() callback = new EventEmitter();

  constructor(el: ElementRef) {
  }

  @HostListener('document:scroll', ['$event'])
  handleScroll($event: Event) {
    const scrollOffset = $event.srcElement.children[0].scrollTop;
    const height = $event.srcElement.children[0].scrollHeight - $event.srcElement.children[0].clientHeight;
    const rowHeight = height / (this.length / 3);

    if (height - scrollOffset <= rowHeight * 2) {
      this.callback.emit();
    }
  }
}
