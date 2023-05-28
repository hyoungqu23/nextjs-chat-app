// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyCHw1xYljL7dge4iNMd7kVq2SltSXECOWQ',
  authDomain: 'nextjs-chat-app-2e814.firebaseapp.com',
  projectId: 'nextjs-chat-app-2e814',
  storageBucket: 'nextjs-chat-app-2e814.appspot.com',
  messagingSenderId: '634263575482',
  appId: '1:634263575482:web:5c3834b18774087d0e9b83',
  measurementId: 'G-XEBRG1H869',
};

const app = initializeApp(firebaseConfig);
const analyticsService = getAnalytics(app);
const firestoreService = getFirestore(app);

export { app, analyticsService, firestoreService };
