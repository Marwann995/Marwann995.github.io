import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyD2AcKtUomqBtBVhwXeJGbQHL_X5gizKlM",
  authDomain: "mokka-menu.firebaseapp.com",
  projectId: "mokka-menu",
  storageBucket: "mokka-menu.firebasestorage.app",
  messagingSenderId: "963891759088",
  appId: "1:963891759088:web:b1b376f8a6ba656a90bf35"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);