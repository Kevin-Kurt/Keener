import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { EntrarComponent } from './entrar/entrar.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { EstoqueComponent } from './estoque/estoque.component';

const routes: Routes = [

  {path: '', redirectTo: 'entrar', pathMatch: 'full'},
  {path: 'entrar', component: EntrarComponent },
  {path: 'cadastrar', component: CadastrarComponent},
  {path: 'inicio', component: InicioComponent},
  {path: 'estoque', component: EstoqueComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
