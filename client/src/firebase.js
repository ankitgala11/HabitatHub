// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
	// "AIzaSyBVu3Axbsx8UacjwDcBJ6h0oldOuXoLgP8"
	authDomain: "property-boo.firebaseapp.com",
	projectId: "property-boo",
	storageBucket: "property-boo.appspot.com",
	messagingSenderId: "419221246453",
	appId: "1:419221246453:web:02294593ac3ece72cd90bc",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
