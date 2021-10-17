// __mocks__/react-native-splash-screen.js
export default {
  show: jest.fn().mockImplementation(() => {
    console.log('show splash screen');
  }),
  hide: jest.fn().mockImplementation(() => {
    console.log('hide splash screen');
  }),
};
