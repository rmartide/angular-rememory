import { Directive, ElementRef, Input } from '@angular/core';
import { Router, RouterEvent, ResolveEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Directive({
  selector: '[appHideonroute]'
})
export class HideonrouteDirective {

  @Input() appHideonroute: string;

  constructor(el: ElementRef, private router: Router) {
    router.events.pipe(filter(e => e instanceof ResolveEnd)).subscribe((e: ResolveEnd) => {
    if (e.url === this.appHideonroute) {
        el.nativeElement.style.display = 'none';
      } else {
        el.nativeElement.style.display = null;
      }
    });
  }

}
