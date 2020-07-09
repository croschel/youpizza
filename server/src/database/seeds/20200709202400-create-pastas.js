module.exports = {
  up: (QueryInterface) => QueryInterface.bulkInsert(
    'pastas',
    [
      {
        thickness: 'fina',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        thickness: 'média',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        thickness: 'grossa',
        created_at: new Date(),
        updated_at: new Date(),
      },
    ],
    {},
  ),

  down: () => { },
};
