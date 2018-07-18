const dbURI = process.env.MONGODB_URI || 'mongodb://localhost:27017/events';
const port = process.env.PORT || 4000;
const secret = 'aeorgheJEFJEKF';
// const client = {
//   sandbox: 'AU_mYjIkfpdm9UnQ7gQNzfjiKbAjqSMFPPpi7AchIM03oxmkPrfp5UktBkW43Igp1ItZUtD5jxSe8vTF',
//   production: 'AbCR-AX8jkM9QX9shJ-YuKUUPWQdzehLVPzjvzmGHSUKZeFOIMelp23qt5_D-vCluvpw4oQqc21p5rxk'
// };

module.exports = { dbURI, port, secret };
