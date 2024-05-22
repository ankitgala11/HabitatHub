import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration

const firebaseConfig = {
	apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
	authDomain: "habitathub-3c601.firebaseapp.com",
	projectId: "habitathub-3c601",
	storageBucket: "habitathub-3c601.appspot.com",
	messagingSenderId: "198904965520",
	appId: "1:198904965520:web:0c2279d55fbcda2510eb15",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
