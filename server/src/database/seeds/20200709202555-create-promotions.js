module.exports = {
  up: (QueryInterface) => QueryInterface.bulkInsert(
    'promotions',
    [
      {
        title: 'mussarela',
        description: 'queijo parmesão e tomate',
        dia_referencia: 'segunda',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        title: 'calabresa',
        description: 'calabresa importada',
        dia_referencia: 'terça',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        title: 'lombo',
        description: 'lombo suíno com lascas de queijo',
        dia_referencia: 'quarta',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        title: 'file mignon',
        description: 'filé mignon com queijo brie',
        dia_referencia: 'quinta',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        title: 'frango com catupiri',
        description: 'frango com catupiri importado',
        dia_referencia: 'sexta',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        title: 'portuguesa',
        description: 'tomate, presunto, mussarela e cebola',
        dia_referencia: 'sábado',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        title: 'corn e bacon',
        description: 'milho, bacon e mussarela com parmesão',
        dia_referencia: 'domingo',
        created_at: new Date(),
        updated_at: new Date(),
      },
    ],
    {},
  ),

  down: () => { },
};
