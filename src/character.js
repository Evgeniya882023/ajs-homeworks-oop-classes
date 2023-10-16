export default class Character {
  constructor(name, type) {
    const typeClass = [
      'Bowman',
      'Daemon',
      'Magician',
      'Swordsman',
      'Undead',
      'Zombie',
    ];

    if ((name.length <= 2) || (name.length >= 10)) {
      throw new Error(
        'Имя должно содержать min - 2 символа, max - 10',
      );
    }
    if (typeof name !== 'string') {
      throw new Error('Тип класса должен быть строкой');
    }
    if (!typeClass.includes(type)) {
      throw new Error(
        'Выберите один из доступных типов классов: Bowman, Daemon, Magician, Swordsman, Undead, Zombie',
      );
    }
    this.name = name;
    this.type = type;
    this.health = 100;
    this.level = 1;
  }
}
