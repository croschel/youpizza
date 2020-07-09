module.exports = {
  up: (QueryInterface) => QueryInterface.bulkInsert(
    'promotions',
    [
      {
        title: 'mussarela',
        description: 'queijo parmesão e tomate',
        dia_referencia: 'segunda',
      },
      {
        title: 'calabresa',
        description: 'calabresa importada',
        dia_referencia: 'terça',
      },
      {
        title: 'lombo',
        description: 'lombo suíno com lascas de queijo',
        dia_referencia: 'quarta',
      },
      {
        title: 'file mignon',
        description: 'filé mignon com queijo brie',
        dia_referencia: 'quinta',
      },
      {
        title: 'frango com catupiri',
        description: 'frango com catupiri importado',
        dia_referencia: 'sexta',
      },
      {
        title: 'portuguesa',
        description: 'tomate, presunto, mussarela e cebola',
        dia_referencia: 'sábado',
      },
      {
        title: 'corn e bacon',
        description: 'milho, bacon e mussarela com parmesão',
        dia_referencia: 'domingo',
      },
    ],
    {},
  ),

  down: () => { },
};
