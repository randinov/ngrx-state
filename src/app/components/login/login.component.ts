import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthRepository } from 'src/app/service/auth.repository';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string = ""
  password: string = ""

  constructor(private authRepository: AuthRepository, private router: Router) { }

  ngOnInit(): void {

    const u = localStorage.getItem('auth');
    if (u) {
      this.router.navigate(["/"])
    }
  }

  login(){
    this.authRepository.login(this.username, this.password);
  }

}
