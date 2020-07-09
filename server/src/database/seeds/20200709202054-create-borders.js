module.exports = {
  up: (QueryInterface) => QueryInterface.bulkInsert(
    'borders',
    [
      {
        size: 'sem recheio',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        size: 'recheada',
        created_at: new Date(),
        updated_at: new Date(),
      },
    ],
    {},
  ),

  down: () => { },
};
