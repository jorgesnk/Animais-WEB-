import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import {LoginComponent} from'./login/login.component';
import {HomeComponent} from'./home/home.component';
export const routing = RouterModule.forRoot([
    { path: 'login', component: LoginComponent },
    { path: '**', component: HomeComponent },
    {path:'home',component:HomeComponent},

], { useHash: true });