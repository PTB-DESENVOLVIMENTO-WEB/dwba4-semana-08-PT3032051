class Aluno {
  constructor(primeiroNome, segundoNome, primeiraNota, segundaNota) {
    this.primeiroNome = primeiroNome;
    this.segundoNome = segundoNome;
    this.primeiraNota = primeiraNota;
    this.segundaNota = segundaNota;
  }

  nomeCompleto() {
    return `${this.primeiroNome} ${this.segundoNome}`;
  }

  media() {
    return (this.primeiraNota * 0.6) + (this.segundaNota * 0.4);
  }

  situacao() {
    return this.media() >= 6 ? "Aprovado" : "Reprovado";
  }
}

const alunos = [
  new Aluno("João", "Silva", 7, 8.5),
  new Aluno("Maria", "Souza", 5, 6.5),
  new Aluno("Carlos", "Pereira", 8, 9),
  new Aluno("Ana", "Lima", 4, 7),
  new Aluno("Bruna", "Alves", 9, 9.5)
];

alunos.forEach(aluno => {
  alert(`Aluno: ${aluno.nomeCompleto()}\nMédia: ${aluno.media().toFixed(2)}\nSituação: ${aluno.situacao()}`);
});

