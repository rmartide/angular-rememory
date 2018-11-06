import { RxjsComponent } from '@app/rxjs/rxjs.component';
import { BoxesContainerComponent } from '@app/boxes-container/boxes-container.component';
import { Routes } from '@angular/router';

const appRoutes: Routes = [
    { path: 'boxes', component: BoxesContainerComponent },
    { path: 'rxjs', component: RxjsComponent },
    { path: '', redirectTo: '/boxes', pathMatch: 'full' }
];


export default appRoutes;
