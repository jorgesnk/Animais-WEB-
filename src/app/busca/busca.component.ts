import { AnimaisWebPage } from './../../../e2e/app.po';
import { AnimalService } from './../service/animal.service';
import { EnderecoService } from './../service/endereco.service';
import { Http } from '@angular/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-busca',
  templateUrl: './busca.component.html',
  styleUrls: ['./busca.component.css']
})
export class BuscaComponent implements OnInit {


  estados = [];
  animais:any;
  cidades: any;
  public selectCidade: '';
  public selecEstado: "";
  public tipo = ["cachorro", 'gato'];
  public selectTipo = "";
  constructor(private animalService: AnimalService, private http: Http, private enderecoService: EnderecoService) { }

  ngOnInit() {
    this.enderecoService.getEstado().then(data => {

      this.estados = data[0].estados;

    })
  }

  findCidade() {
    this.enderecoService.getCidade(this.selecEstado).then(data => {

      this.cidades = data.cidades;
    })
  }


  buscar() {
    const objBusca = {
      estado: this.selecEstado,
      cidade: this.selectCidade,
      tipo: this.selectTipo
    }
    var that=this;
    that.animais=[];
    this.animalService.getAddres(objBusca).then(data => {
      for (var i=0 ; i < data.saida.length; i++) {
        for (var j = 0; j < data.saida[i].animal.length; j++) {
          that.animalService.getFoto(data.saida[i].animal[j].fotos[0]._id).then(imagem => {
            that.animais.push({
              proprietario: {
                foto: data.saida[i-1].usuario.foto, nome: data.saida[i-1].usuario.nome
              }, nome: data.saida[i-1].animal[j-1].nome, image:imagem[0].fotos[0].foto
            })
            console.log(imagem)
            console.log(that.animais);  
          })

        }
      }
    })


  }

}
