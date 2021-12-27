import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
	apiKey: "AIzaSyBC4hAth9k3yaNj9ckGEjM9mh8trUECu1Y",
	authDomain: "photo-place-app.firebaseapp.com",
	projectId: "photo-place-app",
	storageBucket: "photo-place-app.appspot.com",
	messagingSenderId: "440181511960",
	appId: "1:440181511960:web:1318533590105f0d5eb06d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const getFirebase = () => app;

export { getFirestore };
