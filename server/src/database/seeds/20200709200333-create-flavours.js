module.exports = {
  up: (QueryInterface) => QueryInterface.bulkInsert(
    'flavours',
    [
      {
        title: 'mussarela',
        description: 'queijo parmesão e tomate',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        title: 'calabresa',
        description: 'calabresa importada',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        title: 'lombo',
        description: 'lombo suíno com lascas de queijo',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        title: 'file mignon',
        description: 'filé mignon com queijo brie',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        title: 'frango com catupiri',
        description: 'frango com catupiri importado',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        title: 'portuguesa',
        description: 'tomate, presunto, mussarela e cebola',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        title: 'corn e bacon',
        description: 'milho, bacon e mussarela com parmesão',
        created_at: new Date(),
        updated_at: new Date(),
      },
    ],
    {},
  ),

  down: () => { },
};
