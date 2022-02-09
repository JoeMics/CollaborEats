const admin = require('firebase-admin');

const { GOOGLE_APPLICATION_CREDENTIALS } = process.env;

//Initialize firebase admin sdk
export default admin.initializeApp({
  credential: admin.credential.cert(JSON.parse(GOOGLE_APPLICATION_CREDENTIALS!)),
});
