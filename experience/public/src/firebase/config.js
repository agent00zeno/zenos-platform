import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// ZenOS Platform — firebase project: zenos-platform-94060
// AlbanyZeno.com is the first organization running on this platform.
// Do not treat this as "the CMS Firebase project" —
// it is the canonical ZenOS Platform backend.
const firebaseConfig = {
  apiKey:            "AIzaSyDqRWJK4ui5sa6GSIp79Uj2Xjb19YePuOs",
  authDomain:        "zenos-platform-94060.firebaseapp.com",
  projectId:         "zenos-platform-94060",
  storageBucket:     "zenos-platform-94060.firebasestorage.app",
  messagingSenderId: "790340447696",
  appId:             "1:790340447696:web:f9938062b33d41f1bcddd5"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
