import { Router } from '@angular/router';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() animais:any;
  constructor(public router:Router) { }

  ngOnInit() {
  }

  goTo(data){
    this.router.navigate(['animal/'+data])
  }

}
