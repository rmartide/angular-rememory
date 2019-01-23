import { Component, OnInit, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-modal-iframe',
  templateUrl: './modal-iframe.component.html',
  styleUrls: ['./modal-iframe.component.scss']
})
export class ModalIframeComponent implements OnInit {

  @Input() id;
  src;
  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.src = this.sanitizer.bypassSecurityTrustResourceUrl(`https://www.youtube.com/embed/${this.id}?autoplay=1`);
  }

}
