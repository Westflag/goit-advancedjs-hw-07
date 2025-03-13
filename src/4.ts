// Клас Key
class Key {
  private signature: number;

  constructor() {
    this.signature = Math.random(); // Генерація випадкового підпису
  }

  getSignature(): number {
    return this.signature;
  }
}

// Клас Person
class Person {
  private key: Key;

  constructor(key: Key) {
    this.key = key;
  }

  getKey(): Key {
    return this.key;
  }
}

// Абстрактний клас House
abstract class House {
  protected door: boolean = false; // Двері закриті за замовчуванням
  protected key: Key;
  protected tenants: Person[] = [];

  constructor(key: Key) {
    this.key = key;
  }

  abstract openDoor(key: Key): void;

  comeIn(person: Person): void {
    if (this.door) {
      this.tenants.push(person);
      console.log(`${person.getKey().getSignature()} увійшов у будинок.`);
    } else {
      console.log('Двері закриті! Не можна увійти.');
    }
  }
}

// Клас MyHouse, що успадковує House
class MyHouse extends House {
  openDoor(key: Key): void {
    if (key.getSignature() === this.key.getSignature()) {
      this.door = true;
      console.log('Двері відчинено.');
    } else {
      console.log('Невірний ключ! Двері залишаються закритими.');
    }
  }
}

// Тестування сценарію
const key = new Key(); // Створюємо ключ
const house = new MyHouse(key); // Створюємо будинок і передаємо ключ
const person = new Person(key); // Створюємо людину з цим ключем

house.openDoor(person.getKey()); // Людина намагається відчинити двері
house.comeIn(person); // Людина входить у будинок

export {};
