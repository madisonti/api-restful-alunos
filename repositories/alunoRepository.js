const { v4: uuidv4 } = require('uuid');

let alunos = [];

function create({ nome, email, nome_curso }) {
  const aluno = {
    id: uuidv4(),
    nome,
    email,
    nome_curso,
  };
  alunos.push(aluno);
  return aluno;
}
function update(id, { nome, email, nome_curso }) {
  const index = alunos.findIndex((aluno) => aluno.id === id);
  if (index < 0) return null;

  alunos[index] = { id, nome, email, nome_curso };
  return alunos[index];
}


module.exports = { create };