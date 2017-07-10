import { Component, OnInit } from '@angular/core';
import {HomeService}from'../service/home.service';
import {AnimalService} from '../service/animal.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public estados=['sp','rj']
  public animais=[];
  constructor(private homeService:HomeService,private animalService:AnimalService) { }

  ngOnInit() {
    this.homeService.getHome().then(data=>{
      this.animais=data;
;      this.animais.forEach(element => {
        this.animalService.getFoto(element.fotos[0]._id).then(foto=>{
          element.image=foto[0].fotos[0].foto;
        })
      });
      console.log(this.animais);  
    })
    
  }

}
