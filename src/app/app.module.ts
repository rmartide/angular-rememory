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

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BoxComponent,
    BoxesContainerComponent,
    RxjsComponent,
    BackButtonComponent,
    HideonrouteDirective
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
