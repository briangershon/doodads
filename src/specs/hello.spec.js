import getMessage from '../hello';

test('has default message', () => {
  const message = getMessage();
  expect(message).toEqual('Welcome to Doodads!');
});
