function mostrarDadosAluno(nome, nota1, nota2) {
  let n1 = nota1 * 0.6;
  let n2 = nota2 * 0.4;
  let media = n1 + n2;

  alert(`Aluno: ${nome}\nNota 1: ${nota1}\nNota 2: ${nota2}`);
  alert(`Nota final de ${nome}: ${media.toFixed(2)}`);
}

mostrarDadosAluno("João da Silva", 7, 8.5);
mostrarDadosAluno("Maria Oliveira", 9, 6.5);
mostrarDadosAluno("Carlos Souza", 5, 7);

