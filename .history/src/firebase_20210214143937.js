import firebase from 'firebase/app'
import "firebase/auth"
const app = firebase.initializeApp({
apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
databaseUrl: process.env.REACT_APP_FIREBASE_DATABASE_URL,
projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
storageBucket: REACT_APP_FIREBASE_STORAGE_BUCKET,
messagingSenderId: REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
appId: REACT_APP_FIREBASE_APP_ID,
measurementId: REACT_APP_FIREBASE_MEASUREMENT_ID,
})