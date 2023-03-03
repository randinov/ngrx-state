import { Component, OnInit } from '@angular/core';
import { AuthRepository } from 'src/app/service/auth.repository';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user: any = null

  constructor(private authRepository: AuthRepository) { }

  ngOnInit(): void {
    this.authRepository.my().subscribe({
      next: response => {
        this.user = response
      }
    })
  }

}
