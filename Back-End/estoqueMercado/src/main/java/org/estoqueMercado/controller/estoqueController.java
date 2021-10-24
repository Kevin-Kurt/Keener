package org.estoqueMercado.controller;

import java.util.List;
import org.estoqueMercado.model.estoque;
import org.estoqueMercado.repository.estoqueRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins =  "*", allowedHeaders = "*")
@RequestMapping("/estoque")
public class estoqueController {
	
	@Autowired
	private estoqueRepository er;
	
	@GetMapping
	public List<estoque> listar() {
		return er.findAll();
	}
	
	@PostMapping("/cadastrar")
	public estoque adicionar(@RequestBody estoque estoque) {
		return er.save(estoque);
	}
	
	@DeleteMapping("/{id}")
	public void delete(@PathVariable long id) {
	    er.deleteById(id);
	}
	
}

