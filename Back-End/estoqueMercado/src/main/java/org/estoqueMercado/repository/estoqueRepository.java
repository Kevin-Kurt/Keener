package org.estoqueMercado.repository;


import org.estoqueMercado.model.estoque;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface estoqueRepository extends JpaRepository< estoque, Long> {

}

