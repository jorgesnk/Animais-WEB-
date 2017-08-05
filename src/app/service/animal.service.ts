import { Injectable } from '@angular/core';
import { constante } from '../constante/const'
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { Http, Response } from '@angular/http';

@Injectable()
export class AnimalService {
  private endpointFoto = constante.api + 'animal/foto/';
  private endpointAddres = constante.api + 'animal/address';
  private endpointCreate = constante.api + "animal";
  private endpointById = constante.api + "animal/";
  constructor(private http: Http) { }

  getFoto(data) {
    return this.http.get(this.endpointFoto + data).map((res: Response) => res.json()).toPromise().then().catch();
  }

  getAddres(data) {

    return this.http.patch(this.endpointAddres, data).map((res: Response) => res.json()).toPromise().then().catch();

  }

  create(data) {
    return this.http.post(this.endpointCreate, data).map((res: Response) => res.json()).toPromise().then().catch();

  }

  getById(data) {
    return this.http.get(this.endpointById+data).map((res: Response) => res.json()).toPromise().then().catch();
  }
}
