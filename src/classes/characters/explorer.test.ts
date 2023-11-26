import { Hospital } from '../buildings/Hospital';
import { Axe } from '../weapons/Axe';
import { Explorer } from './Explorer';

test('criar explorador,aplicar dano a vida e recuperar sua vida inicial', () => {
  const explorador = new Explorer();
  const hospital = new Hospital();
  explorador.damage('Life', 10);
  expect(explorador.life).toEqual(70);
  hospital.add(explorador);
  hospital.execute();
  expect(explorador.life).toEqual(explorador.maxLife);
  expect(hospital.slot).toBeNull();
});
test('Nao deve conseguir equipar uma arma', () => {
  const explorador = new Explorer();
  const axe = new Axe();
  explorador.equipWeapon(axe, explorador);
  expect(explorador.weapon).toBeNull();
});
