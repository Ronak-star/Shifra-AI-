
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBtqaBPScjDw-N6XgPSlYrgMntnKJQyDPM",
  authDomain: "shifraai-41ad9.firebaseapp.com",
  projectId: "shifraai-41ad9",
  storageBucket: "shifraai-41ad9.firebasestorage.app",
  messagingSenderId: "934757499291",
  appId: "1:934757499291:web:aaa527e4287b674362213e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)
const provider = new GoogleAuthProvider()

export {auth , provider}

