const bcrypt = require('bcryptjs');

module.exports = {
  up: (QueryInterface) => QueryInterface.bulkInsert(
    'users',
    [
      {
        name: 'Julio de Oliveira',
        email: 'julio@gmail.com',
        endereco: 'Av das amoreiras 4001',
        points: 0,
        hash_password: bcrypt.hashSync('123456', 8),
        created_at: new Date(),
        updated_at: new Date(),
      },
    ],
    {},
  ),

  down: () => { },
};
