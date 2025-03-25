const apiUrl = 'http://localhost:8801/cliente';

document.getElementById('getDataBtn').addEventListener('click', function() {
    const clienteId = document.getElementById('clienteId').value;

    if(clienteId.length != 0) {
        fetch(`${apiUrl}/${clienteId}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`cliente não encontrado, favor inserir um id válido.`);
                }
                return response.json();
            })
            .then(data => {
                document.getElementById('result').value = JSON.stringify(data, null, 2);
                document.getElementById('nmclienteDisplay').value = data.nmcliente;
                document.getElementById('cdempresaDisplay').value = data.cdempresa;
                document.getElementById('idclienteDisplay').value = data.id;
            })
            .catch(error => {
                document.getElementById('result').value = `Erro: ${error.message}`;
            });
    }
    else if(clienteId.length == 0) {
        fetch(`${apiUrl}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`Não existe nenhum cliente disponível no momento ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                document.getElementById('result').value = JSON.stringify(data, null, 2);
            })
            .catch(error => {
                document.getElementById('result').value = `Erro: ${error.message}`;
            });
    }
});

document.getElementById('sendDataBtn').addEventListener('click', function() {
    const nmCliente = document.getElementById('nmClientePost').value;
    const cdEmpresa = document.getElementById('cdEmpresaPost').value;

    if(nmCliente && cdEmpresa) {
        const payload = {
            nmCliente: nmCliente,
            cdEmpresa: cdEmpresa
        };

        fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
        })
        .then(response => {
            if(!response.ok) {
                throw new Error(`Erro ao enviar dados: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            alert('Dados enviados com sucesso!');
            console.log('Resposta da API', data);
        })
        .catch(error => {
            alert(`Erro: ${error.message}`);
        });
    } else {
        alert('Por favor, preencha todos os campos.')
    }
});

document.getElementById('updateDataBtn').addEventListener('click', function() {
    const clienteId = document.getElementById('idclienteDisplayUpd').value;  // Ajuste no ID do cliente
    const nmCliente = document.getElementById('nmclienteDisplayUpd').value;  // Ajuste no nome do cliente
    const cdEmpresa = document.getElementById('cdempresaDisplayUpd').value;  // Ajuste no valor do cliente

    if(clienteId && nmCliente && cdEmpresa) {
        const payload = {
            nmCliente: nmCliente,
            cdEmpresa: cdEmpresa,
        };

        fetch(`${apiUrl}/${clienteId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
        })
        .then(response => {
            if (!response.ok) {
                throw new Error(`Erro ao atualizar cliente: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            alert('cliente atualizado com sucesso!');
            console.log('Resposta da API: ', data);
        })
        .catch(error => {
            alert(`Erro: ${error.message}`);
        });
    } else {
        alert('Por favor, preencha todos os campos antes de atualizar');
    } 
});

document.getElementById('deleteDataBtn').addEventListener('click', function() {
    const clienteId = document.getElementById('idclienteDisplayDel').value;

    if(clienteId) {
        if (confirm(`Tem certeza que deseja excluir o cliente com ID ${clienteId}?`)) {
            fetch(`${apiUrl}/${clienteId}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            .then(response => {
                if(!response.ok) {
                    throw new Error(`Erro ao deletar cliente: ${response.status}`);
                }

                alert('cliente deletado com suceeso')
            })
            .catch(error => {
                alert(`Erro: ${error.message}`);
            })
        }
    } else {
        alert('Por favor, insira um valor de ID de cliente válido para deletar');
    }
})
