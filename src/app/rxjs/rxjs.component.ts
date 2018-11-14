import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { debounceTime, filter, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.scss']
})
export class RxjsComponent implements OnInit {

  constructor(private http: HttpClient) { }
  input$: Subject<String> = new Subject();
  typed = '';

  ngOnInit() {
    this.input$.pipe(
      debounceTime(300),
      filter(typed => typed !== ''),
      distinctUntilChanged()
    )
      .subscribe(typed => this.print(typed));
  }

  handleChange(event: KeyboardEvent) {
    const target = <HTMLInputElement>event.target;
    this.input$.next(target.value);
    // this.http.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&q=${target.value}`)

  }

  print(value) {

  }

}
