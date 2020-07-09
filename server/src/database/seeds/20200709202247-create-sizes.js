module.exports = {
  up: (QueryInterface) => QueryInterface.bulkInsert(
    'sizes',
    [
      {
        diameter: 'pequena',
      },
      {
        diameter: 'média',
      },
      {
        diameter: 'grande',
      },
      {
        diameter: 'giga',
      },
    ],
    {},
  ),

  down: () => { },
};
