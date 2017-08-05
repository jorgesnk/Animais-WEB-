import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})


export class MenuComponent implements OnInit {

  constructor(private router:Router) { }

  public user;

  ngOnInit() {
    this.user= JSON.parse(window.localStorage.getItem('user'));
  }


  goTo(data){
    this.router.navigate([data]);
  }

  
  


 


  

  

}
