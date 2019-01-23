import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';

import { RouterModule } from '@angular/router';
import { appRoutes } from '@app/routes/routes';
import { BoxComponent } from './box/box.component';
import { BoxesContainerComponent } from './boxes-container/boxes-container.component';
import { RxjsComponent } from './rxjs/rxjs.component';
import { BackButtonComponent } from './back-button/back-button.component';
import { HideonrouteDirective } from './directives/hideonroute.directive';
import { HttpClientModule } from '@angular/common/http';
import { SearchItemComponent } from './rxjs/search-item/search-item.component';
import { FormsComponent } from './forms/forms.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EventsComponent } from './events/events.component';
import { Child1Component } from './events/child1/child1.component';
import { Child2Component } from './events/child2/child2.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ModalIframeComponent } from './rxjs/modal-iframe/modal-iframe.component';
import { NgBootstrapFormValidationModule } from 'ng-bootstrap-form-validation';
import { InfinityScrollDirective } from './directives/infinity-scroll.directive';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BoxComponent,
    BoxesContainerComponent,
    RxjsComponent,
    BackButtonComponent,
    HideonrouteDirective,
    SearchItemComponent,
    FormsComponent,
    EventsComponent,
    Child1Component,
    Child2Component,
    ModalIframeComponent,
    InfinityScrollDirective
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    NgBootstrapFormValidationModule.forRoot(),
    NgBootstrapFormValidationModule
  ],
  entryComponents: [
    ModalIframeComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
