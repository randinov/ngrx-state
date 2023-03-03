import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { map } from 'rxjs';
import { DelAuthState, SetAuthState } from '../store/auth/auth.action';
import { authStateKey } from '../store/auth/auth.reducer';
import { AuthRepository } from './auth.repository';

@Injectable({
  providedIn: 'root'
})
export class StoreAuthService extends AuthRepository {

  constructor(private store: Store<any>, private router: Router) {
    super();
   }

   login(username: string, password: string) {
    console.log("You already use 200KB bandwith")
      this.store.dispatch(SetAuthState({payload: {
        nama: 'Rini Sari',
        umur: 28,
        alamat: 'Jl. Merdeka No. 10, Jakarta',
        pekerjaan: 'Akuntan',
        email: 'rini.sari@email.com',
      }}))
      this.router.navigate(["/profile"])
    }

    logout() {
      console.log("You already use 200KB bandwith")
      this.store.dispatch(DelAuthState());
      this.router.navigate(["/login"])
    }

    my(){
      return this.store.select(authStateKey).pipe(map(res => res.nama))
    }
}
