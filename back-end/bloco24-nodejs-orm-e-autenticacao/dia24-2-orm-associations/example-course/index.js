// index.js
const express = require('express');
const { Address, Employee } = require('./models');
const { Book, User } = require('./models');

const app = express();

app.get('/employees', async (_req, res) => {
  try {
    const employees = await Employee.findAll({
      include: { model: Address, as: 'addresses' },
    });

    return res.status(200).json(employees);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'Ocorreu um erro' });
  };
});

// Eager Loading : Traz tudo
// app.get('/employees/:id', async (req, res) => {
//   try {
//     const { id } = req.params;
//     const employee = await Employee.findOne({
//         where: { id },
//         // retorna tudo sem o attributes, ou podemos filtrar, usando o attributes: { exclude: ['number']
//         include: [{
//           model: Address, as: 'addresses', attributes: { exclude: ['number'] },
//         }],
//       });

//     if (!employee)
//       return res.status(404).json({ message: 'Funcionário não encontrado' });

//     return res.status(200).json(employee);
//   } catch (e) {
//     console.log(e.message);
//     res.status(500).json({ message: 'Algo deu errado' });
//   };
// });

// Lazy Loading:azy loading é muito útil em situações em que não sabemos se vamos, de fato, precisar buscar todas as informações de uma só vez. Aqui, se tivéssemos utilizado eager loading , teríamos buscado os dados dos funcionários mesmo quando includeAddresses não era informado, e precisaríamos excluir a chave addresses do resultado do banco caso esse parâmetro não fosse informado. Com o lazy loading , podemos carregar apenas os dados do funcionário, e carregar os dados dos endereços apenas quando necessário, economizando recursos do banco.
app.get('/employees/:id', async (req, res) => {
  try {
    const { id } = req.params;
const employee = await Employee.findOne({ where: { id } });

    if (!employee)
      return res.status(404).json({ message: 'Funcionário não encontrado' });

       if (req.query.includeAddresses === 'true') {
         const addresses = await Address.findAll({ where: { employeeId: id } });
         return res.status(200).json({ employee, addresses });
       }

    return res.status(200).json(employee);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'Algo deu errado' });
  };
});

// Nota: a propriedade through: { attributes: [] } deve estar presente, pois sem ela, em cada book , apareceriam todos seus respectivos users . Tente fazê-lo sem e veja a diferença no resultado!
app.get('/usersbooks/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findOne({
      where: { userId: id },
      include: [{ model: Book, as: 'books', through: { attributes: [] } }],
    });

    if (!user)
      return res.status(404).json({ message: 'Usuário não encontrado' });

    return res.status(200).json(user);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'Algo deu errado' });
  };
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Ouvindo na porta ${PORT}`));

module.exports = app;