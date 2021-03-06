import ObjectShape from '../';

class Dog {
  constructor() {
    this.type = 'dog';
  }
}

describe('instanceOf validator creator', () => {
  it('should return false on invalidly created validator', () => {
    const shape = new ObjectShape({
      pet: ObjectShape.instanceOf(2),
    });

    const object = {
      pet: new Dog(),
    };

    const errors = shape.validate(object);
    console.log(errors);

    expect(errors.length).toBe(1);
  });
});

describe('instanceOf', () => {
  const shape = new ObjectShape({
    pet: ObjectShape.instanceOf(Dog),
  });

  it('should return true', () => {
    const object = {
      pet: new Dog(),
    };

    const errors = shape.validate(object);
    console.log(errors);

    expect(errors.length).toBe(0);
  });

  it('should return false', () => {
    const object = {
      pet: null,
    };

    const errors = shape.validate(object);
    console.log(errors);

    expect(errors.length).toBe(1);
  });
});
