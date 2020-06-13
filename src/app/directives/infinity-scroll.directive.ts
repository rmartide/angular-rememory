import { Directive, ElementRef, HostListener, Input, Output, EventEmitter } from '@angular/core';
import { fromEvent, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Directive({
  selector: '[appInfinityScroll]'
})
export class InfinityScrollDirective {

  @Input() length;
  @Output() callback = new EventEmitter();

  constructor(private el: ElementRef) {
  }
    @HostListener('document:scroll', ['$event'])
    handleScroll($event: any) {
      const scrollOffset = $event.srcElement.children[0].scrollTop;
      const visibleHeight = $event.srcElement.children[0].clientHeight;
      const scrollHeight = $event.srcElement.children[0].scrollHeight;
      const height = scrollHeight - visibleHeight;
      const rowHeight = height / (this.length / 3);
      // const numberVisibleRows = Math.round(visibleHeight / rowHeight);
      // const visibleRowHeight = visibleHeight / (this.length / 3);
      // const numberVisibleRowKak = Math.round(visibleHeight / visibleRowHeight);
      // console.log(visibleRowHeight, numberVisibleRowKak, visibleHeight);
      // console.log(numberVisibleRows, scrollHeight, scrollOffset / rowHeight);
      if (height - scrollOffset <= rowHeight * 2) {
        this.callback.emit();
      }
    }
}
