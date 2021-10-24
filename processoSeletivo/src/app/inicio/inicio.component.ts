import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { estoque } from '../model/estoque';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  estoque: estoque = new estoque

  constructor(
    private auth: AuthService,
    private router: Router
  ) { }

  ngOnInit(){
  }

  cadastrar(){
    this.auth.inicio(this.estoque).subscribe((resp: estoque) => {
      this.estoque = resp
      alert('produto cadastrado com sucesso!');
      (document.getElementById('nome') as HTMLInputElement).value = '';
      (document.getElementById('codigo') as HTMLInputElement).value = '';
      (document.getElementById('preco') as HTMLInputElement).value = ''
      
    }, erro =>{ 
      
      if(erro.status == 500){
        alert("Campo não preenchido!")
      }
  })
  }

  tabela(){     
    this.router.navigate(['/estoque'])
  }

  login(){     
    this.router.navigate(['/entrar'])
  }


  
}
