const express = require('express');
const router = express.Router();
const { createFuncionario, getFuncionario,updateFuncionario, deleteFuncionario} = require('../controllers/funcionarioController');

router.post('/api/funcionarios', createFuncionario); // Rota POST
router.get('/api/getFuncionarios', getFuncionario); // Rota POST
router.put('/api/updatefuncionarios/:id', updateFuncionario);
router.delete('/api/deleteFuncionarios/:id', deleteFuncionario);
//

module.exports = router;
