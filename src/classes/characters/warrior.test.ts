import { Enemy } from '../Enemy';
import { Zombie } from '../Enemy/Zombie';
import { Hospital } from '../buildings/Hospital';
import { Axe } from '../weapons/Axe';
import { Warrior } from './Warrior';
const warrior = new Warrior();

test('criar um warrior,aplicar dano a vida e recuperar sua vida inicial', () => {
  const damage = 10;
  const hospital = new Hospital();
  warrior.damage('Life', damage);
  expect(warrior.life).toEqual(warrior.maxLife - damage);
  hospital.add(warrior);
  hospital.execute();
  expect(warrior.life).toEqual(warrior.maxLife);
  expect(hospital.slot).toBeNull();
});
test('Deve conseguir equipar uma Axe', () => {
  const axe = new Axe();
  warrior.equipWeapon(axe, warrior);
  expect(warrior.weapon).not.toBeNull();
});
test('Deve atacar um inimigo', () => {
  const axe = new Axe();
  const enemy = new Zombie();
  warrior.equipWeapon(axe, warrior);
  expect(warrior.weapon).not.toBeNull();
  warrior.weapon?.attack(enemy);
  expect(enemy.getLife()).toEqual(enemy.getMaxLife() - axe.damage);
});
