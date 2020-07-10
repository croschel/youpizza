module.exports = {
  up: (QueryInterface) => QueryInterface.bulkInsert(
    'borders',
    [
      {
        size: 'sem recheio',
        price: 0,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        size: 'recheada',
        price: 5,
        created_at: new Date(),
        updated_at: new Date(),
      },
    ],
    {},
  ),

  down: () => { },
};
