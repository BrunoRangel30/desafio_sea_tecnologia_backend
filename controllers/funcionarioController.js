const Funcionario = require('../models/funcionario'); //importa o modelo do banco

//adiciona o funcionario
const createFuncionario = async (req, res) => {
  const funcionarioData = req.body;
  try {
    const novoFuncionario = new Funcionario(funcionarioData);
    await novoFuncionario.save();
    res.status(201).json(novoFuncionario);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
//recupera o funcionario
const getFuncionario  = async (req, res) => {
  try {
    const funcionarios = await Funcionario.find({ nome: { $ne: "" } });
    res.status(200).json(funcionarios);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
//atualiza
const updateFuncionario = async (req, res) => {
  const { id } = req.params;
  const updatedData = req.body;

  try {
    const funcionario = await Funcionario.findByIdAndUpdate(id, updatedData, { new: true }); //se ja existe atualiza caso contrario cria :)
    if (!funcionario) {
      return res.status(404).json({ message: 'Funcionário não encontrado' });
    }
    res.status(200).json(funcionario);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
//deleta o funcionario
const deleteFuncionario = async (req, res) => {
  const { id } = req.params;
  try {
    const funcionario = await Funcionario.findByIdAndDelete(id);
    if (!funcionario) {
      return res.status(404).json({ message: 'Funcionário não encontrado' });
    }
    res.status(200).json({ message: 'Funcionário excluído com sucesso' });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = {
  createFuncionario,
  getFuncionario,
  updateFuncionario,
  deleteFuncionario
};
