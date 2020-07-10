module.exports = {
  up: (QueryInterface) => QueryInterface.bulkInsert(
    'sizes',
    [
      {
        diameter: 'pequena',
        price: 0,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        diameter: 'média',
        price: 0,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        diameter: 'grande',
        price: 8,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        diameter: 'giga',
        price: 12,
        created_at: new Date(),
        updated_at: new Date(),
      },
    ],
    {},
  ),

  down: () => { },
};
