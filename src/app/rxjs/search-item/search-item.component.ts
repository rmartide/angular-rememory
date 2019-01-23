import { Component, OnInit, Input, ElementRef, OnDestroy } from '@angular/core';
import { YoutubeItem } from '../youtube-search';
import ProxyTech from '@services/proximity-tech.js';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalIframeComponent } from '../modal-iframe/modal-iframe.component';

@Component({
  selector: 'app-search-item',
  templateUrl: './search-item.component.html',
  styleUrls: ['./search-item.component.scss']
})
export class SearchItemComponent implements OnInit, OnDestroy {

  @Input() searchItem: YoutubeItem;
  Nearby: any;
  constructor(private elRef: ElementRef, private modalService: NgbModal) { }

  ngOnInit() {
    // this.Nearby = ProxyTech.exec(this.elRef.nativeElement);
  }

  ngOnDestroy(): void {
    // this.Nearby.removeEventListeners();
  }

  handleClick() {
    console.log(`https://www.youtube.com/watch?v=${this.searchItem.id.videoId}`);
    const modalRef = this.modalService.open(ModalIframeComponent, {
      size: 'lg'
    });
    modalRef.componentInstance.id = this.searchItem.id.videoId;
  }
}
