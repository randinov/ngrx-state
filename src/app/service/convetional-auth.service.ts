import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { AuthRepository } from './auth.repository';

@Injectable({
  providedIn: 'root'
})
export class ConvetionalAuthService extends AuthRepository {
  constructor(private router: Router) { 
    super();
  }
  login(username: string, password: string) {
  console.log("You already use 200KB bandwith")
    localStorage.setItem("auth", "true");
    this.router.navigate(["/profile"])
  }

  logout(): void {
    console.log("You already use 200KB bandwith")
    localStorage.removeItem("auth");
    this.router.navigate(["/login"])
  }
  my() {
    console.log("You already use 200KB bandwith")
    return new BehaviorSubject({
      nama: 'Rini Sari',
      umur: 28,
      alamat: 'Jl. Merdeka No. 10, Jakarta',
      pekerjaan: 'Akuntan',
      email: 'rini.sari@email.com',
    })
  }

}
