import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
const firebaseConfig = {
    apiKey: "AIzaSyArwLa9hqMt6qDri0NxWGbbf-RnGX4ET_0",
    authDomain: "eklavya-16f5c.firebaseapp.com",
    projectId: "eklavya-16f5c",
    storageBucket: "eklavya-16f5c.firebasestorage.app",
    messagingSenderId: "1082959976352",
    appId: "1:1082959976352:web:3d802b571f045015ce76c5"
  };
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);