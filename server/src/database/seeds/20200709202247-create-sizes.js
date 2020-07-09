module.exports = {
  up: (QueryInterface) => QueryInterface.bulkInsert(
    'sizes',
    [
      {
        diameter: 'pequena',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        diameter: 'média',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        diameter: 'grande',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        diameter: 'giga',
        created_at: new Date(),
        updated_at: new Date(),
      },
    ],
    {},
  ),

  down: () => { },
};
