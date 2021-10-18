import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { EntrarComponent } from './entrar/entrar.component';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { RouterTestingModule } from '@angular/router/testing';
import { AppRoutingModule } from './app-routing.module';
@NgModule({
  declarations: [
    AppComponent,
    EntrarComponent,
    CadastrarComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    RouterTestingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
