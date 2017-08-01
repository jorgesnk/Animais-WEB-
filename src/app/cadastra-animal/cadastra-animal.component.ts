import { Ng2ImgMaxService } from 'ng2-img-max';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastra-animal',
  templateUrl: './cadastra-animal.component.html',
  styleUrls: ['./cadastra-animal.component.css']
})
export class CadastraAnimalComponent implements OnInit {

  animal = {
    nome: "",
    prprietario: '',
    fotos: [],
    tipo: "",
  }

  tipos = ['cachorro', 'gato'];
  selecTipo = "";

  constructor(private ng2ImgMaxService:Ng2ImgMaxService) { }

  ngOnInit() {
  }

  clicar() {
    document.getElementById('arquivo').click();
  }


  handleFileSelect(evt) {
    var files = evt.target.files;
    var file = files[0];
    if (file.type != "image/jpeg") {
      alert("Arquivo não aceito");
      return;
    }
    if (files && file) {
      var reader = new FileReader();

      reader.onload = this._handleReaderLoaded.bind(this);
      this.ng2ImgMaxService.resize([file], 250, 250).subscribe((result) => {
        reader.onload = this._handleReaderLoaded.bind(this);

        reader.readAsBinaryString(result);
      });

    }
  }

  _handleReaderLoaded(readerEvt) {
    var binaryString = readerEvt.target.result;
    var enumerter=this.animal.fotos.length;

    console.log(this.animal.fotos.length, enumerter);
    if(this.animal.fotos.length>4){
      alert('Numero maximo de Fotos Exedido')
      return;
    }
    this.animal.fotos[enumerter] = 'data:image/jpeg;base64,' + btoa(binaryString);
  }

  removeFoto(i){
    console.log(i)
    this.animal.fotos.splice(i,1);
    console.log(this.animal.fotos);
  }

  save(){

  }

}
