import {Sibyl} from './model.sibyl';

describe('Sibyl', () => {
  it('should create an instance', () => {
    expect(new Sibyl()).toBeTruthy();
  });

  it('should accept values in the constructor', () => {
    let sibyl = new Sibyl({
      name: 'Murat',
      surname: 'Karadag'
    });
    expect(sibyl.name).toEqual('Murat');
    expect(sibyl.surname).toEqual('Karadag');
  });
});