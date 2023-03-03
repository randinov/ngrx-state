import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export abstract class AuthRepository {
    abstract login(username: string, password: string): any;
    abstract logout(): void;
    abstract my(): Observable<any>;
}