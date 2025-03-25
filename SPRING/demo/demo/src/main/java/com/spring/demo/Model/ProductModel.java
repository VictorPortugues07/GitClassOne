package com.spring.demo.Model;

import jakarta.persistence.*;
import java.math.BigDecimal;


@Entity
@Table(name = "TBPRODUTO")
    public class ProductModel {

    @Id@GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String nmProduto;
    private BigDecimal vlProduto;

    public Integer getId() {
        return id;
    }

    public String getNmProduto() {
        return nmProduto;
    }

    public void setNmProduto(String nmProduto) {
        this.nmProduto = nmProduto;
    }

    public BigDecimal getVlProduto() {
        return vlProduto;
    }

    public void setVlProduto(BigDecimal vlProduto) {
        this.vlProduto = vlProduto;
    }

    public void setId(Integer id) {
        this.id = id;
    }
    }
