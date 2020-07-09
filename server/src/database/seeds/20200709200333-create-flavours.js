module.exports = {
  up: (QueryInterface) => QueryInterface.bulkInsert(
    'flavours',
    [
      {
        title: 'mussarela',
        description: 'queijo parmesão e tomate',
      },
      {
        title: 'calabresa',
        description: 'calabresa importada',
      },
      {
        title: 'lombo',
        description: 'lombo suíno com lascas de queijo',
      },
      {
        title: 'file mignon',
        description: 'filé mignon com queijo brie',
      },
      {
        title: 'frango com catupiri',
        description: 'frango com catupiri importado',
      },
      {
        title: 'portuguesa',
        description: 'tomate, presunto, mussarela e cebola',
      },
      {
        title: 'corn e bacon',
        description: 'milho, bacon e mussarela com parmesão',
      },
    ],
    {},
  ),

  down: () => { },
};
