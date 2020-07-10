module.exports = {
  up: (QueryInterface) => QueryInterface.bulkInsert(
    'pasta',
    [
      {
        thickness: 'fina',
        price: 0,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        thickness: 'média',
        price: 3,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        thickness: 'grossa',
        price: 6,
        created_at: new Date(),
        updated_at: new Date(),
      },
    ],
    {},
  ),

  down: () => { },
};
