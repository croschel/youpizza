module.exports = {
  up: (QueryInterface) => QueryInterface.bulkInsert(
    'pastas',
    [
      {
        thickness: 'fina',
      },
      {
        thickness: 'média',
      },
      {
        thickness: 'grossa',
      },
    ],
    {},
  ),

  down: () => { },
};
