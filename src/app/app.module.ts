import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GetUserComponent } from './get-user/get-user.component';
import { HttpClientModule } from '@angular/common/http';
import { RoutingComponents } from './app-routing.module';
import { NavbarComponent } from './navbar/navbar.component';
import { UpdateUserComponent } from './update-user/update-user.component';

@NgModule({
  declarations: [AppComponent, RoutingComponents, UpdateUserComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
