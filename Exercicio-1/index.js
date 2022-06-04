import Professor from "./Classes/Professor/index.js";
import Aluno from "./Classes/Aluno/index.js";


const professor = new Professor('roberto', 30, '24/4/2003', '+55 61 99587-4463', 'valparaiso', 'hoje', ['portugues', 'biologia', 'matematica'], 2)
const aluno = new Aluno('Willian', 13, '01/01/2009', '+55 61 99556-8751', 'valparaiso 2', 487, '5º', 'D')

console.log(professor);
console.log(aluno)
