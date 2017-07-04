import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router'
import {LoginComponent} from'./login/login.component'

export const routing = RouterModule.forRoot([
    { path: 'login', component: LoginComponent },
    { path: '**', component: LoginComponent },

], { useHash: true });