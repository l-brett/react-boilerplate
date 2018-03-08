import {config, setTitle} from '../../../../src/stores/reducers/Config';


test('creates setTitle action', () => {
  const result = setTitle('test');
  expect(result).toEqual({
    type:'CONFIG:SET_TITLE',
    title:'test'
  });
})

test('sets title correctly', () => {
  const result = config({}, {
    type:'CONFIG:SET_TITLE',
    title:'test'
  });
  expect(result).toEqual({title:'test'});
})