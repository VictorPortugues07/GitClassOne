package com.spring.demo.Model;

import jakarta.persistence.*;

import java.io.Serializable;

@Entity
@Table(name = "TBCLIENTE")
public class ClienteModel implements Serializable {
    private static final long serialVersionUID = 1L;
    @Id@GeneratedValue(strategy = GenerationType.IDENTITY)

    private Integer id;
    private String cdEmpresa;
    private String nmCliente;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getCdEmpresa() {
        return cdEmpresa;
    }

    public void setCdEmpresa(String cdEmpresa) {
        this.cdEmpresa = cdEmpresa;
    }

    public String getNmCliente() {
        return nmCliente;
    }

    public void setNmCliente(String nmCliente) {
        this.nmCliente = nmCliente;
    }
}
