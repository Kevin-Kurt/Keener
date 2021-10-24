import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
  idEstoque: number
  estoque: estoque = new estoque()

  constructor(
    private estoqueService: estoqueService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.getAllEstoque()
    this.idEstoque = this.route.snapshot.params['id']
    this.findByIdEstoque(this.idEstoque)
  }


  findByIdEstoque(id: number){
    this.estoqueService.getByIdEstoque(id).subscribe((resp: estoque) => {
    this.estoque = resp
    })
  }

  getAllEstoque() {
    this.estoqueService.getAllEstoque().subscribe((resp: estoque[]) => {
      this.listaEstoque = resp
    })
  }

  apagar(){
    this.estoqueService.deletePostagem(this.idEstoque).subscribe(() =>{
      alert('Produto apagado com sucesso!')
    })
  }

  voltar() {
    this.router.navigate(['/inicio'])
  }

}
