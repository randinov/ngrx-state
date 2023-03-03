import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { ProfileComponent } from './components/profile/profile.component';
import { AuthRepository } from './service/auth.repository';
import { ConvetionalAuthService } from './service/convetional-auth.service';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { store } from './store/store';
import { StoreAuthService } from './service/store-auth.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, FormsModule, StoreModule.forRoot(store), StoreDevtoolsModule.instrument({ maxAge: 25 })
  ],
  providers: [
    {
      provide: AuthRepository,
      useClass: StoreAuthService
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
