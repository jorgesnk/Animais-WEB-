import { Injectable } from '@angular/core';
import { constante } from '../constante/const'
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { Http, Response } from '@angular/http';

@Injectable()
export class AnimalService {
  private endpointFoto = constante.api + 'animal/foto/';
  constructor(private http: Http) { }

  getFoto(data) {
    return this.http.get(this.endpointFoto+data).map((res: Response) => res.json()).toPromise().then().catch();
  }


}