import { FormsComponent } from '@app/forms/forms.component';
import { RxjsComponent } from '@app/rxjs/rxjs.component';
import { BoxesContainerComponent } from '@app/boxes-container/boxes-container.component';
import { Routes } from '@angular/router';

export const appRoutes: Routes = [
    { path: 'boxes', component: BoxesContainerComponent },
    { path: 'rxjs', component: RxjsComponent },
    { path: 'forms', component: FormsComponent},
    { path: '', redirectTo: '/boxes', pathMatch: 'full' },
    { path: '**', redirectTo: '/boxes' }
];
