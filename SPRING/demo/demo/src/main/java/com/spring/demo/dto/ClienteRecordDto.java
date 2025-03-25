package com.spring.demo.dto;

import jakarta.validation.constraints.NotBlank;


public record ClienteRecordDto(@NotBlank String cdEmpresa, @NotBlank String nmCliente) {
}

