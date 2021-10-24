package org.estoqueMercado.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

@Entity
@Table(name = "tb_estoque")
public class estoque {

	
	

		@Id
		@GeneratedValue (strategy = GenerationType.IDENTITY )
		private long id;
		
	    @NotNull
	    @Size(min = 2, max = 100)
		private String nome;
	    
	    @NotNull
	    @Size(min = 1, max = 100)
		private String produto;
		
		@NotNull
		@Size(min = 1, max = 100)
		private String preco;

		
		public long getId() {
			return id;
		}

		public void setId(long id) {
			this.id = id;
		}

		public String getNome() {
			return nome;
		}

		public void setNome(String nome) {
			this.nome = nome;
		}

		public String getProduto() {
			return produto;
		}

		public void setProduto(String produto) {
			this.produto = produto;
		}

		public String getPreco() {
			return preco;
		}

		public void setPreco(String preco) {
			this.preco = preco;
		}
	
}
		

