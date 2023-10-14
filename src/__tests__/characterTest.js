import Character from '../character';
import Bowman from '../Bowman';
import Daemon from '../Daemon';
import Magician from '../Magician';
import Swordsman from '../Swordsman';
import Undead from '../Undead';
import Zombie from '../Zombie';

test('Создание персонажа для типа Bowman', () => {
  const result = new Bowman('Bowman');

  expect(result).toEqual({
    name: 'Bowman',
    type: 'Bowman',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  });
});

test('Создание персонажа для типа Daemon', () => {
  const result = new Daemon('Daemon');

  expect(result).toEqual({
    name: 'Daemon',
    type: 'Daemon',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
  });
});

test('Создание персонажа для типа Magician', () => {
  const result = new Magician('Magician');

  expect(result).toEqual({
    name: 'Magician',
    type: 'Magician',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
  });
});

test('Создание персонажа для типа Swordsman', () => {
  const result = new Swordsman('Swordsman');

  expect(result).toEqual({
    name: 'Swordsman',
    type: 'Swordsman',
    health: 100,
    level: 1,
    attack: 40,
    defence: 10,
  });
});

test('Создание персонажа для типа Undead', () => {
  const result = new Undead('Undead');

  expect(result).toEqual({
    name: 'Undead',
    type: 'Undead',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  });
});

test('Создание персонажа для типа Zombie', () => {
  const result = new Zombie('Zombie');

  expect(result).toEqual({
    name: 'Zombie',
    type: 'Zombie',
    health: 100,
    level: 1,
    attack: 40,
    defence: 10,
  });
});

test('ошибка в имени', () => {
  expect(() => Character('R', 'Zombie').toThrowError('Имя должно содержать min - 2 символа, max - 10'));
});
test('ошибка в виде имени', () => {
  expect(() => Character(1, 'Zombie').toThrowError('Тип класса должен быть строкой'));
});
test('ошибка в типе', () => {
  expect(() => Character('Geka', 'Boweman').toThrowError('Выберите один из доступных типов классов: Bowman, Daemon, Magician, Swordsman, Undead, Zombie'));
});
