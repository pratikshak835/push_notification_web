importScripts("https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js");


const firebaseConfig = {
  apiKey: "AIzaSyCceOYC7sRQYAqX4e444UCnUPuuf2mmrM0",
  authDomain: "push-notification-web-f812d.firebaseapp.com",
  projectId: "push-notification-web-f812d",
  storageBucket: "push-notification-web-f812d.appspot.com",
  messagingSenderId: "933726014323",
  appId: "1:933726014323:web:213e6bd67934bc212f5306",
  measurementId: "G-TTFZGLTJ6C"
};

firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();

// Optional:
messaging.onBackgroundMessage((message) => {
  console.log("onBackgroundMessage", message);
});