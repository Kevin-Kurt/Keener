import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { estoque } from '../model/estoque';
import { AuthService } from '../service/auth.service';
import { estoqueService } from '../service/estoque.service';

@Component({
  selector: 'app-estoque',
  templateUrl: './estoque.component.html',
  styleUrls: ['./estoque.component.css']
})
export class EstoqueComponent implements OnInit {

  listaEstoque: estoque[]

  constructor(
    private estoqueService: estoqueService
  ) { }

  ngOnInit() {
    this.getAllEstoque()
  }

  getAllEstoque() {
    this.estoqueService.getAllEstoque().subscribe((resp: estoque[]) => {
      this.listaEstoque = resp
    })
  }

}
