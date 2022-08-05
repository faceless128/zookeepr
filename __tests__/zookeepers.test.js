const fs = require('fs');
jest.mock('fs');

const {
  filterByQuery,
  findById,
  createNewZookeeper,
  validateZookeeper,
} = require('../lib/zookeepers.js');

const { zookeepers } = require('../data/zookeepers');

test('creates an zookeeper object', () => {
  const zookeeper = createNewZookeeper(
    {name: "Darlene", id: "jhgdja3ng2"},
    zookeepers
  );

  expect(zookeeper.name).toBe("Darlene");
  expect(zookeeper.id).toBe("jhgdja3ng2")
});

test('filters by query', () => {
  const startingZookeepers = [
    {
      id: "3",
      name: "Linda",
      age: 48,
      favoriteAnimal: "otter"
      },
      {
      id: "4",
      name: "Ryan",
      age: 20,
      favoriteAnimal: "dog"
      },
  ];

  const updatedZookeepers = filterByQuery({ age: "20" }, startingZookeepers);

  expect(updatedZookeepers.length).toEqual(1);
});

test('find by id', () => {
  const startingZookeepers = [
    {
      id: "3",
      name: "Linda",
      age: 48,
      favoriteAnimal: "otter"
      },
      {
      id: "4",
      name: "Ryan",
      age: 20,
      favoriteAnimal: "dog"
      },
  ];

  const result = findById('3', startingZookeepers);

  expect(result.name).toBe('Linda');
});

test('validates favorite animal', () => {
  const zookeeper =     {
    id: "3",
    name: "Linda",
    age: 48,
    favoriteAnimal: "otter",
    };

  const invalidZookeeper =     {
    id: "3",
    name: "Linda",
    age: 48,
  };
  
  const result = validateZookeeper(zookeeper);
  const result2 = validateZookeeper(invalidZookeeper);

  expect(result).toBe(true);
  expect(result2).toBe(false);
});