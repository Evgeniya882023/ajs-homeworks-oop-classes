import Character from '../character';

test('ошибка в имени', () => {
  expect(() => Character('R', 'Zombie').toThrowError('Имя должно содержать min - 2 символа, max - 10'));
});
test('ошибка в виде имени', () => {
  expect(() => Character(1, 'Zombie').toThrowError('Тип класса должен быть строкой'));
});
test('ошибка в типе', () => {
  expect(() => Character('Geka', 'Boweman').toThrowError('Выберите один из доступных типов классов: Bowman, Daemon, Magician, Swordsman, Undead, Zombie'));
});
