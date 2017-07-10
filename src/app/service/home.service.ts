import { Injectable } from '@angular/core';
import {constante} from '../constante/const'
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { Http, Response } from '@angular/http';
@Injectable()

export class HomeService {

  private endpointFindHome = constante.api+"animal/home";
  constructor(private http: Http) { }
  getHome() {
    return this.http.get(this.endpointFindHome).map((res: Response) => res.json()).toPromise().then().catch();
  }

}
