module.exports = {
  up: (QueryInterface) => QueryInterface.bulkInsert(
    'flavours',
    [
      {
        title: 'mussarela',
        description: 'queijo parmesão e tomate',
        price: 20,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        title: 'calabresa',
        description: 'calabresa importada',
        price: 20,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        title: 'lombo',
        description: 'lombo suíno com lascas de queijo',
        price: 22,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        title: 'file mignon',
        description: 'filé mignon com queijo brie',
        price: 30,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        title: 'frango com catupiri',
        description: 'frango com catupiri importado',
        price: 25,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        title: 'portuguesa',
        description: 'tomate, presunto, mussarela e cebola',
        price: 22,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        title: 'corn e bacon',
        description: 'milho, bacon e mussarela com parmesão',
        price: 28,
        created_at: new Date(),
        updated_at: new Date(),
      },
    ],
    {},
  ),

  down: () => { },
};
