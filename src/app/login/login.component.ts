import { Router } from '@angular/router';
import { UserService } from './../service/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public user={email:'',password:''};
  constructor(private router:Router, private userService:UserService) { }

  ngOnInit() {

  }

  entrar(){
    if(!this.user.email||!this.user.password){
      alert('Verifique todos os campos');
      return
    }
    this.userService.login(this.user).then(data=>{
      if(data.message=="Usuario ou senha invalido"){
        alert(data.message);
        return;
      }
      window.localStorage.setItem('token',data.token);
      window.localStorage.setItem('user', JSON.stringify(data.user));
      this.router.navigate(['home'])

    }).catch(err=>{
      console.log(err)
    })
  }

}
