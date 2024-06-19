const mongoose = require('mongoose');

const funcionarioSchema = new mongoose.Schema({
  nome: String,
  cpf: String,
  sexo: String,
  dataNascimento: String,
  rg: String,
  cargo: String,
  ativo: Boolean,
  usesEpi: Boolean,
  selecaoArquivo:String,
  atividades: [
    {
      atividade: String,
      arrayEPI: [
        {
          ca: String,
          epi: String
        }
      ]
    }
  ]
});

const Funcionario = mongoose.model('Funcionario', funcionarioSchema);

module.exports = Funcionario;
