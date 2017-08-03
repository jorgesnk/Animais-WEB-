import { Injectable } from '@angular/core';
import { constante } from '../constante/const'
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { Http, Response } from '@angular/http';
@Injectable()
export class UserService {

  private endpointCreate = constante.api + 'user/create';
  private endPintLogin= constante.api+'user/singUp';
  constructor(private http:Http) { }

  Create(data) {
    return this.http.post(this.endpointCreate , data).map((res: Response) => res.json()).toPromise().then().catch();
  }

  login(data){
        return this.http.post(this.endPintLogin , data).map((res: Response) => res.json()).toPromise().then().catch();

  }

}
