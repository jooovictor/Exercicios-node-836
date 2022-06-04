import Usuario from "../Usuario/index.js";

class Aluno extends Usuario {
    constructor(
        nome, idade, data_nasc, telefone, endereco,
        mensalidade = 487, serie = null, turma = null){

        super(nome, idade, data_nasc, telefone, endereco)
        this.mensalidade = mensalidade
        this.serie = serie
        this.turma = turma
    }
}

export default Aluno;