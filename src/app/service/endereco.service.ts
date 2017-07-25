import { Injectable } from '@angular/core';
import { constante } from '../constante/const'
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { Http, Response } from '@angular/http';

@Injectable()
export class EnderecoService {

  private endpoitnEstado=constante.api+'endereco/';
  constructor(private http:Http) { }

  getEstado(){
    return this.http.get(this.endpoitnEstado).map((res: Response) => res.json()).toPromise().then().catch()
  }

  getCidade(data){
    return this.http.get(this.endpoitnEstado+data).map((res: Response) => res.json()).toPromise().then().catch()
  }

}
