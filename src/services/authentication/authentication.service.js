import { initializeApp } from "firebase/app";

const loginRequest = async (email, password) => {
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  return signInWithEmailAndPassword(auth, email, password);
};