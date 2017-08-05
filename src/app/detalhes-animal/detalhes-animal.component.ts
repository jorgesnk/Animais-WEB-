import { ActivatedRoute } from '@angular/router';
import { AnimalService } from './../service/animal.service';
import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-detalhes-animal',
  templateUrl: './detalhes-animal.component.html',
  styleUrls: ['./detalhes-animal.component.css']
})
export class DetalhesAnimalComponent implements OnInit {
  public animal:any;
  public fotos=[''];
    
  constructor(private animalService: AnimalService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {

    var id = this.activatedRoute.snapshot.params;
    console.log(id)
    this.animalService.getById(id.id).then(data => {
      this.animal = data;
      console.log(data);
      this.animal.fotos.forEach(element => {
        this.animalService.getFoto(element._id).then(foto => {
          this.fotos.push(foto[0].fotos[0].foto); 
          console.log(this.fotos);
        })
      });
      
    })

  }

}
