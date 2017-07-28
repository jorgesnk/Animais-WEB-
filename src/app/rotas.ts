import { CadastroComponent } from './cadastro/cadastro.component';
import { BuscaComponent } from './busca/busca.component';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import {LoginComponent} from'./login/login.component';
import {HomeComponent} from'./home/home.component';


export const routing = RouterModule.forRoot([
    { path: 'login', component: LoginComponent },
    {path:'home',component:HomeComponent},
    {path:'cadastro',component:CadastroComponent},
    {path:'busca',component:BuscaComponent},
    { path: '**', component: BuscaComponent },

], { useHash: true });