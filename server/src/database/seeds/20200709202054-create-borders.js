module.exports = {
  up: (QueryInterface) => QueryInterface.bulkInsert(
    'borders',
    [
      {
        size: 'sem recheio',
      },
      {
        size: 'recheada',
      },
    ],
    {},
  ),

  down: () => { },
};
