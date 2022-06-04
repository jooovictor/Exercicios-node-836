import Usuario from "../Usuario/index.js";

class Professor extends Usuario {

    constructor(
        nome, idade, data_nasc, telefone, endereco,
        data_contratacao, materias, salario = 3000){
        super(nome, idade, data_nasc, telefone, endereco)

        this.data_contratacao = data_contratacao,
        this.materias = materias,
        this.salario = salario
    }
}

export default Professor