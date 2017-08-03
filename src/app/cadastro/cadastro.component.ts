import { Router } from '@angular/router';
import { UserService } from './../service/user.service';
import { EnderecoService } from './../service/endereco.service';
import { Component, OnInit } from '@angular/core';
import { Ng2ImgMaxService } from 'ng2-img-max';
import { default as cep } from 'cep-promise'

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {
  cidades: any;
  estados = [];
  public foto = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAACWCAMAAAAL34HQAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAV9QTFRF4eHh/v7+8/Pz7u7u9PT08vLy9fX1+/v7/f39+vr6nZ2c9vb2ysrK19fX7+/vsLCw09PT/Pz8tbW16enp0dHQ+fn5l5eW8PDw6+vr5+fn9/f3xMTDn5+erKyslJST3Nzc3d3d7OzspqamwsLB7e3tq6uriIiIpaWk6urq5OTjwsLCw8PD2NjYu7u7kJCQ39/fwMDA4ODgqKioyMjI5eXkpqallZWU2trat7e26OjotLS08fHxx8fH+Pj4kZGR1tbWzMzMoaGh2dnZqqqqubm51NTTmZmZxsbG4uLip6enb29vqKin7+/u0tLSsLCvqqqpsrKx2NjXo6Ojtra1uLi3s7OzpKSj5ubmk5OTp6emrq6t1dXV29vbz8/P+Pj37u7thoaGbW1swMC/09PS1dXUvr69uLi4h4eHxcXEr6+v9PTzgIB/v7+/srKy6enovLy8kpKS8fHw6urp////NTU1WNCliQAAA99JREFUeNrs2glT2kAUwHESCIaA3AiiIAgIeF/1vm9rPapV69X7vtuX7z91OqOjLZB9Ifs2ncn/E/xmA5uXbFy6LXM5LIflsByWw3JYDsthOSyH5bAclsP6X1kd8Zj7pnDcHqzuxZiclm/zy6dvlsWzpmLwT0p8Xyyrc8UHtZIHRLJ68xLULhFbPxTEKof90CClTwgrVITGeYYFsNqqYJS3QM+aewbGrl5qVocfGGriOppi9TGprl0DlKwORhVAOyErxKwC3wc6Vj+wN03GOvAiWN4ZKtaFhGB9WiNiZWSEClpeE7H6AFVyj4ZVwLHUXRrWMI4FkzSsSZxK6idh7aSRqzVEwjpvQbLkEAVr1YdktcyRsBJY1hUFqy+CZEntGwQsF2BZvzQCVgzLinRRXMR29Gq125IFyR1bsh6dEbC+4VndBKxLNMtNwZryoVkPCFijCXuy8KtVJmDtYycICFKsVqeC3re2KabTJewu76LY5fUv2MEmQMJ6hWR5SKZT/TvyGpoaIPCsjWmc6zHRO4i5iC1ZnW4Uq5WI1ZZyWAhW3mEhWkTtW3Eq1jFmh0iuUrG0III1TndcEMCweuhOMTC3xM9kLMQxhmeK7iLqOWaWUiJkXTGfGBQ3CFndCtfR1CwrW2FkVdooWXohwnM0Nc2aYHv7poZpWfow01NsMEPMGqwyqCL9OjFL72BYLs8TclaW4ddl9ui1CZY+xsCK0rMOErZk6V2SLVkzXluyFk4N/4lfBbBOnhvdelJPBbDCRr8ttVWnZ5VnDW/UFQGrFeY4bZlnlVi+tDF/9zHL2mWam+V3tKyTJOO5fm+WkrXO/qa5GtWoWFEP5u2Itz+89p6AtYf6WOoPbXbyjDurCiby5QY0rqwlH5hLCWjcWEdBMN98PMuHFZWhqYLhtaz1rGMPNF2w0GMxK2CB6rrUqJWszTxYlHvbOtYlWJd7wCJWZggsbWTQCtZYAoDOxcjKVFSwPNdCk6zMLPBoqDlW6ScXFajnzbA2k8CpnHlW7zRwa77bLGtdBY4dmWOVViSeKhgzw9JyaeBb8AWe9bYI3CtjWaEVlb8KLpAsRaVQwfwhhhXIA1Hxh+ysViBL1lhZgXEgrPUlG6sApPk0Jpam0rJgkYnlIVZBetmYhf9Sksuf8W+Wn14FngUjlixABVLIgLUMQlIMWEExLPjRmCVIBamGLEUUC3oasJaEqf55NLvLiohjSfVZnSCwwbosRSQrVY8VAqFt12H5xLISdVgguImarI+iWemarKJo1r0t9ZYlCWdt1mIJV917q3TDmqgzcoxsubi2tTVyM6X777B+CzAAjxjwvjOu0LUAAAAASUVORK5CYII="
  public tipo = ["cachorro", 'gato'];
  public corfima = "";
  public user = {
    nome: "",
    email: "",
    password: "",
    endereco: {
      logadouro: "",
      estado: "",
      cidade: "", bairro: "",
      cep: "", complemento: ""
    },
    ativo: false,
    redefinirSenha: false,
    foto: ""
  }
  public viewFoto = false;

  constructor(private router:Router,private userService: UserService, private enderecoService: EnderecoService, private ng2ImgMaxService: Ng2ImgMaxService) { }

  ngOnInit() {
    this.enderecoService.getEstado().then(data => {

      this.estados = data[0].estados;

    })
  }

  findCidade() {
    this.enderecoService.getCidade(this.user.endereco.cidade).then(data => {

      this.cidades = data.cidades;
    })
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
    this.user.foto = 'data:image/jpeg;base64,' + btoa(binaryString);
  }

  clicar() {
    document.getElementById('arquivo').click();
  }

  buscaCep() {
    cep(this.user.endereco.cep).then(dado => {
      this.user.endereco.bairro = dado.neighborhood;

      this.user.endereco.logadouro = dado.street;
    }).catch(err => {
      alert('CEP invalido')
    });
  }

  saveUser() {
    var a;
    var b;
    var c;
    var d;
    for (var i = 0; i < this.user.email.length; i++) {
      if (this.user.email.charAt(i) == "@") { 
        a= '@';
      }
      if(this.user.email.charAt(i)=="."){
        if(this.user.email.charAt(i+1)=="c"){
          if(this.user.email.charAt(i+2)=="o"){
            if(this.user.email.charAt(i+3)=="m"){
              b='c';
              c='o';
              d='m';
            }
          }
        }
      }
    }
    if(a!="@"||b!='c'||c!="o"||d!="m"){
      alert('E-mail invalido!');
      return;
    }

    if (this.user.password != this.corfima) {
      alert('Confirme as senhas!');
      return;
    }

    if (!this.user.email || !this.user.nome || !this.user.password) {
      alert('Confira todos os Campos');
      return;
    }

    this.userService.Create(this.user).then(data => {
      console.log(data);
      if(data.errorMEssage=="Usuario ja cadastrado"){
        alert(data.errorMEssage);
        return;
      }

      window.localStorage.setItem('token',JSON.stringify(data.token));
      this.router.navigate(['home'])

    }).catch(err => {
      alert('error')
    })
  }

}
