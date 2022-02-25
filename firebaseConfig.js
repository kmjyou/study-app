import firebase from "firebase/compat/app";

import "firebase/compat/database";
import "firebase/compat/storage";

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyCfwuA-wM-t8c9RXE_P3UaxxZmiG_J5fSE",
  authDomain: "study-app-2bb99.firebaseapp.com",
  databaseURL: "https://study-app-2bb99-default-rtdb.asia-southeast1.firebasedatabase.app/",
  projectId: "study-app-2bb99",
  storageBucket: "study-app-2bb99.appspot.com",
  messagingSenderId: "404836658953",
  appId: "1:404836658953:web:3ea7a4da7d511be47a2dd8",
  measurementId: "G-F7CGW3J3XK"
};

//사용 방법입니다. 
//파이어베이스 연결에 혹시 오류가 있을 경우를 대비한 코드
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export const firebase_db = firebase.database()