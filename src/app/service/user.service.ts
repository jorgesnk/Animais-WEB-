import { Injectable } from '@angular/core';
import { constante } from '../constante/const'
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { Http, Response } from '@angular/http';
@Injectable()
export class UserService {

  private endpointCreate = constante.api + 'user/create';
  constructor(private http:Http) { }

  Create(data) {
    return this.http.get(this.endpointCreate , data).map((res: Response) => res.json()).toPromise().then().catch();
  }

}
