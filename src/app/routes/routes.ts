import { EventsComponent } from '@app/events/events.component';
import { FormsComponent } from '@app/forms/forms.component';
import { RxjsComponent } from '@app/rxjs/rxjs.component';
import { BoxesContainerComponent } from '@app/boxes-container/boxes-container.component';
import { Routes } from '@angular/router';
import { NgrxComponent } from '@app/ngrx/ngrx.component';

export const appRoutes: Routes = [
    { path: 'boxes', component: BoxesContainerComponent },
    { path: 'rxjs', component: RxjsComponent },
    { path: 'forms', component: FormsComponent },
    { path: 'events', component: EventsComponent},
    { path: 'ngrx', component: NgrxComponent},
    { path: '', redirectTo: '/boxes', pathMatch: 'full' },
    { path: '**', redirectTo: '/boxes' }
];
